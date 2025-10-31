const express = require('express')
const path = require('path')
const session = require('express-session');
const flash = require('connect-flash'); //npm package to flash a message once after a trigger, this message is stored in the session storage only once and then gets deleted
const app = express();

app.use(session({secret:'secretcode', resave:false, saveUninitialized:true}));
app.use(flash());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.listen(3000,(req,res)=>{
    console.log('Server is listening')
})

app.get('/',(req,res)=>{
    //the defualt session storgae of the server side is known as memoryStore. The storage which stores the session information is known as session storage
    res.send('This server is using express-session package to handle the stateless http request by adding the flavour of stateful protocol into it stateful protocols saves the state of the session between client and server express-session helps by saving the session id of the session saved in tempory memory(memoryStore) of the server in the web browser in the form of cookie for the client. SEE COOKIE' )
    
})

//exploring some options of session object

app.get('/reqNumber',(req,res)=>{
    if(req.session.count){
        req.session.count++
    }else{
        req.session.count=1;
    }
    res.send(`You have sent ${req.session.count} number of request to this route`)
})

app.get('/register',(req,res)=>{
    const {name='anonymous'} = req.query;
    req.session.name = name;
    if(name==='anonymous')
        req.flash('error','User registration failed')
    else
        req.flash('success','User registered successfully');
    res.redirect('/greetUser');
})

app.get('/greetUser',(req,res)=>{
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    res.render('greetings.ejs',{name:req.session.name});
})