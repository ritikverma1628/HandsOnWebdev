const mongoose = require("mongoose")
const Chat = require("./models/chat.js");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main().then(res=>{console.log("MongoDb connected")}).catch(err=>{console.log(err)})

const allChats =  [
  {
    from: "Ritik",
    to: "Aman",
    msg: "Hey Aman, did you check the new AI model I sent?"
  },
  {
    from: "Sneha",
    to: "Ritik",
    msg: "Ritik, can you share yesterday’s DSA notes?"
  },
  {
    from: "Aman",
    to: "Priya",
    msg: "Priya, we're meeting in the cafeteria at 2, right?"
  },
  {
    from: "Priya",
    to: "Vikram",
    msg: "Vikram, can you review my code for the assignment?"
  },
  {
    from: "Vikram",
    to: "Sneha",
    msg: "Sure Sneha, I’ll help you debug after lunch."
  }
];

Chat.insertMany(allChats)
