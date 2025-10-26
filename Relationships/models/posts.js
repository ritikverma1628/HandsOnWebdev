//this example demonstrates the ONE TO SQUILLIONS type of relationship where one document of parent collection can be linked to millions of documents of child collections
//this relationship is made by storing the reference of parent document in the child documents


const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/RelationsDemo');
    console.log("Connection has been established")
}

const userSchema = new mongoose.Schema({
    username : String ,
    email : String, 
})
const User = mongoose.model('User',userSchema)

const postSchema = new mongoose.Schema({
    content: String, 
    likes : Number, 
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})
const Post = mongoose.model('Post',postSchema);

const addData = async () =>{
    // const user1 = await User.create({username:'Ritik', email: 'ritikisverma9@gmail.com'})

    // const post1 = await Post.create({content:'Hello world!', likes:28, user:user1});
    // const post2 = await Post.create({content:'BYe Bye!', likes:46, user:user1});

    // console.log(user1)
    // console.log(post1)
    // console.log(post2)

    // const result = await Post.findOne({})
    // console.log(result);

    // const result = await Post.findOne({}).populate('user')
    // console.log(result);
}

async function run(){
    await main();
    await addData();
}

run().catch(err=>console.log(err));