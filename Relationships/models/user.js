//this example demonstrated the ONE TO FEW type of relationship where one parent document is linked to only few document of child collection 
//the child collection is not made individually for these relationships
//instead the documents pertaining to child collection are stored inside the parent document

const mongoose = require('mongoose')
const readline = require('readline')

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const ask = (question)=>{
    return new Promise((resolve)=>{
        rl.question(question,(answer)=>{
            resolve(answer)
        })
    })
}

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/RelationsDemo');
    console.log("Connection has been established")
}

const userSchema = new mongoose.Schema({
    username : String, 
    addresses : [{
        _id : false,
        location : String, 
        street : String
    }]
})
const User = mongoose.model('User',userSchema);

const addUser = async(username, location, street)=>{
    await User.insertOne({username: username, addresses:{location: location, street : street}});
}

const addAddress = async (username,location, street)=>{
    const user = await User.findOne({username: username});
    if(!user){
        console.log('User not found!')
    }
    else{
        user.addresses.push({location: location, street : street});
        await user.save();
    }

}

const getData = async()=>{
    const username = await ask('Enter the username: ');
    const location = await ask('Enter the location: ');
    const street = await ask('Enter the street: ');

    const data = {username: username, location: location , street: street}
    return data;

}

async function run(){
    await main();
    const {username, location , street} = await getData();
    await addAddress(username, location , street);
    rl.close();
}



run().catch((err)=>{
    console.log(err)
});