const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const {v4:uuid} = require("uuid");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Iamdonno1#',
});

// connection.query("create database  if not exists instagram", (err,result)=>{
//     if (err) throw err;
//     console.log("Database created")
// })

connection.query('use instagram',(err,result)=>{
    if (err) throw err;
    console.log("Database Selected")
})

// let createTable = 'create table user (id varchar(100) primary key, username varchar(50), email varchar(50), password varchar(50))';

// connection.query(createTable,(err,result)=>{
//     if(err) throw err;
//     console.log("Tabel created")
// })

// let getRandomUser = ()=>{
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password()
//   ];
// }
// const users = [];
// for(let i = 0 ; i<100; i++){
//     users.push(getRandomUser());
// }
// let insertQuery = 'insert into user values ?';
// connection.query(insertQuery, [users], (err, result)=>{
//     if (err) throw err;
//     console.log(result);
// })

connection.query('select * from user',(err, result)=>{
    if(err) throw err;
    console.log(result.length);
})

connection.end();





