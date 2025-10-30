const express = require('express')
const session = require('express-session');
const app = express();
app.use(session({secret:'secretcode'}));
app.listen(3000,(req,res)=>{
    console.log('Server is listening')
})

app.get('/',(req,res)=>{
    res.send('This server is using express-session package to handle the stateless http request by adding the flavour of stateful protocol into it stateful protocols saves the state of the session between client and server express-session helps by saving the session id of the session saved in tempory memory of the server in the web browser in the form of cookie for the client. SEE COOKIE' )
    
})