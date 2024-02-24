const express = require('express');
const app = express();
// console.log(app);

let port = 8080;
app.listen(port,() =>{
    console.log(`App listening on port ${port}`);
});
// app.use((req, res) =>{
//     console.log("Request is received");
//     res.send("This is a basic response")
// })
// app.get('/apple', function(req, res){
//     res.send("apple");
// })
// app.get('/mango',function(req, res){ 
//   res.send("mango");  
// })
// app.get('/:username/:id', function(req, res){
//  let {username,id} = req.params;
// //  console.log(username,id);
//  res.send(`welcome to the wikipedia of ${username}`);
// });
// app.get('*', function(req, res){
//     res.send("This path does not exist");
// });
app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("No result");
})