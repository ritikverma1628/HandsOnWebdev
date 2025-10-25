let express = require("express");
let path = require("path");
let methodOverride = require("method-override")
let app = express();
let {v4 : uuid} = require("uuid")

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

let port = 3000;

let posts = [
    {
        id: uuid(),
        username: "ritik",
        content: "i love coding"
    },

    {
        id: uuid(),
        username: "nikhil",
        content: "he is master in everything"
    },

    {
        id: uuid(),
        username: "mayank",
        content: "he is a mystery to me"
    }
]

app.listen(port, ()=>{
    console.log("Server is listening...")
});

app.get("/posts", (req,res)=>{
    res.render("posts.ejs",{posts});
});


app.get("/posts/new",(req,res)=>{
    res.render("form.ejs");
})

app.patch("/posts/:id",(req,res)=>{
    let id = req.params;
    let post = posts.find(post=>post.id===id);
    res.render("delForm.ejs",{post});

})
app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let post = posts.find(post=>post.id===id);
    res.render("posts.ejs",{posts:[post]});
})


app.post("/posts",(req,res)=>{
    let {username, content}=req.body;
    let newId = uuid();
    posts.push({id:newId,username,content});
    res.redirect("/posts");
})
