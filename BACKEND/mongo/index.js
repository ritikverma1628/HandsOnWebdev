const mongoose = require("mongoose");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/user");
}

main()
.then(()=>console.log("Connection has been established."))
.catch(err=>console.log(err));

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    city: String
});

const User = mongoose.model("User", userSchema);

// User.insertOne({name: "Ritik", age: 21, city:"Delhi"});
// User.insertMany([
//     {name: "Vishu", age: 20, city:"Ghaziabad"},
//     {name: "Nikhil", age: 20, city:"Ayodhya"},
//     {name: "Faiz", age: 22, city:"Afganistan"}]
// )

// User.find()
// .then(res=>{console.log(res)});

// User.find({name:"Ritik"}).then(res=>{console.log(res)});
// User.findOne({name:"Ritik"}).then(res=>{console.log(res)});

// User.updateOne({name:"Ritik"}, {name:"Kamal",age:50, city:"Bhiwani"}).then(res=>{console.log(res)});
// User.updateMany({age:21},{age:22}).then(res=>{console.log(res)});

// User.findOneAndUpdate({age:22},{age:23}).then(res=>{console.log(res)});
User.findAndUpdate({age:22}, {age:25}).then(res=>{console.log(res)});
