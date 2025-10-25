import express from "express"
const app = express();

const port = 3000;
app.listen(port, ()=>{
    console.log(`Server: ${port} is listening...`);
})

// app.use((req, res)=>{       //used to respond to every route
//     if (req.url === "/favicon.ico") return res.end();
//     console.log("Your request was received ");
//     // res.send("You are getting responses");   //only one response per request is allowed , more than one responses for a request will throw an error
//     res.send({
//         name:"apple",
//         color:"red",
//     });
// })

// app.get("/",(req,res)=>{res.send("Get request to root directory.")})
// app.get("/search",(req,res)=>{res.send("Get request to search route.")});
// app.get("/home",(req,res)=>{res.send("Get request to home page.")});
// app.get(/.*/,(req,res)=>{res.send("This get request in invalid")});

app.get("/:id/:username", (req,res)=>{
    console.log(req.params);
    res.send(`Welcome to the page of ${req.params.username}`);
})
