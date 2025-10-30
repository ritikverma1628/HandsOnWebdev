const express = require('express')
const session = require('express-session');
const app = express();
app.use(session({secret:'secretcode', resave:false, saveUninitialized:true}));
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