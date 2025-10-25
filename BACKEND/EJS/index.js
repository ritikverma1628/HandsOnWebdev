const express = require("express");
const path = require ("path")
const app = express();
const port=8080;

app.set("view engine","ejs");       //jo engine views(tempaltes) ko set karega vo ejs hai 
app.use(express.static(path.join(__dirname,"/public")));
app.set("views",path.join(__dirname,"/views"));         //views ko us path me dekho jo path current directory aur views ko join karke aayega  


app.listen(port, (req,res)=>{console.log("SErver is listening")})
app.get("/ig/:username", (req,res)=>{
    const {username} = req.params;
    const allData = require("./data.json");
    const userData = allData[username];
    res.render("instagram.ejs",{data:userData});
})