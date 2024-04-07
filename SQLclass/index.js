const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'mysql@123'
});
let getRandomUser = () => {
    return  [
     faker.string.uuid(),
     faker.internet.userName(),
     faker.internet.email(),
     faker.internet.password() 
    ];
  }

let data = [];
for(let i = 0; i <100; i++) {
    data.push(getRandomUser());
}
let q = "INSERT INTO user (id,username,email,password) VALUES ? ";

try {
connection.query(q,[data],(err,results,fields)=> {
 if(err) throw err;
 console.log(results)
});}
catch(err) {
    console.log(err);
}
connection.end();
