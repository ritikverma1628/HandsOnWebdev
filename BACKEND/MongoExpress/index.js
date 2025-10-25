const express = require("express")
const path = require("path");
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const Chat = require("./models/chat.js")

const app = express();

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))
app.set("views",path.join(__dirname, "./views"))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main().then(res=>{console.log("Connection with mongoDB successful .")}).catch(err=>console.log(err));

app.listen(8080, ()=>{console.log("SErver is listening on port 8080")});

app.get("/chats/:id/edit",async(req,res)=>{
    const {id} = req.params;
    const chat = await Chat.findOne({_id:id})
    res.render("edit.ejs",{chat});
    
})

app.get("/", (req,res)=>{
    res.send("yes bro, i am listening")
})

app.patch("/chats/:id", async(req,res)=>{
    const {id} = req.params;
    const {msg} = req.body;
    await Chat.updateOne({_id:id},{msg:msg});
    res.redirect("/chats");
});

app.post("/chats",(req,res)=>{
    const chat = req.body;
    Chat.insertOne({from:chat.from, to: chat.to, msg: chat.msg});
    res.redirect("/chats");
})

app.get("/chats",async (req,res)=>{
    const chats = await Chat.find();
    res.render("index.ejs", {chats});
})

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
});

