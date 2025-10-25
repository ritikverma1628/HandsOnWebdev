const express = require("express");
const app = express();

const path = require("path")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const sql = require('mysql2');
const con = sql.createConnection({
    host: 'localhost',
    user: "root",
    password: "Iamdonno1#",
    database: "instagram"
});

const methodOverride = require("method-override");
app.use(methodOverride('_method'));

const port = 3000;
app.listen(port, ()=>{
    console.log("SErver is listening...")
})

app.get('/',(req,res)=>{
    con.query(`select count(*) from user`,(err, result)=>{
        if(err) throw err;
        let count = result[0]['count(*)'];
        res.render("home.ejs", {count})
    })
})

app.get('/users',(req,res)=>{
    const q = `select * from user`;
    con.query(q,(err, result)=>{
        if(err) throw err;
        let users = result;
        res.render("users.ejs", {users});
    })
})

app.get('/user/new',(req,res)=>{
    res.render("new.ejs");
})

app.get("/user/:id/edit",(req,res)=>{
    const {id} = req.params;
    const q = `select * from user where id = "${id}"`
    con.query(q,(err,result)=>{
        const user = result[0];
        res.render("edit.ejs",{user});
    })
})


app.get('/user/:id',(req,res)=>{
    const id = req.params.id;
    const q = `select * from user where id = "${id}"`;
    con.query(q,(err, result)=>{
        if(err) throw err;
        let users = result;
        if (users.length==0)
            res.send("There is no existing user with this id");
        else{
            res.render("users.ejs",{users});
        }
    })
})

app.post("/users",(req,res)=>{
    const userData = req.body;
    const q = ` insert into user values (?,?,?,?)`;
    const data = [userData.id, userData.username, userData.email, userData.password];
    con.query(q,data,(err,result)=>{
        if(err) throw err;
        res.redirect("/users");
    })
})

app.patch("/users",(req,res)=>{
    let {id, username, password} = req.body;
    const q = `select * from user where id ="${id}"`;
    con.query(q,(err,result)=>{
        const data = result[0];
        if(data.password !== password){
            res.send("You cannot update your username if you type in wrong password")
        }
        else{
            const q = `update user set username = "${username}" where id = "${id}"`;
            con.query(q,(err,result)=>{
                res.redirect("/users");
            })
        }
    })
})


app.delete("/user/:id", (req,res)=>{
    const {id} = req.params;
    const q = ` delete from user where id = "${id}"`;
    con.query(q,(err,result)=>{
        if (err) throw err;
        res.redirect("/users");
    })
    

})