const express = require('express');
const app = express();
const port = 8080;
const {v4 : uuidv4} = require('uuid');
uuidv4();
const methodOverride = require('method-override');
app.use(methodOverride("_method"))

const path = require('path');

app.use(express.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));



let posts = [
    {
        id : uuidv4(),
        username: 'apna college',
        content: 'i love coding'
    },
    {
        id : uuidv4(),
        username: 'Code With harry',
        content: 'i love logic'
    },
    {
        id : uuidv4(),
        username: 'Code Help',
        content: 'i love DSA'
    },
];

app.get('/posts',(req,res)=>{
    res.render('index.ejs',{posts})
})
app.get('/', (req, res)=>{
  res.send("Server working well!");
})
app.get('/posts/new',(req, res)=>{
    res.render('new.ejs');
});
app.post('/posts',(req, res)=>{
    let id = uuidv4();
    let {username, content} = req.body;
    posts.push({id,username,content});
    res.redirect("/posts"); 
});
app.get('/posts/:id',(req, res)=>{
    let {id} = req.params;
    let post = posts.find((post)=> post.id === id);
    res.render('show.ejs',{post});
});
app.patch('/posts/:id',(req, res)=>{
   let {id} = req.params;
   let newContent = req.body.content;
   let post = posts.find((post)=> post.id === id);
   post.content = newContent;
   res.redirect("/posts");
});
app.get('/posts/:id/edit',(req, res)=>{
    let {id} = req.params;
    let post = posts.find((post)=> post.id === id);
    res.render('edit.ejs',{post});
})
app.delete('/posts/:id',(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((post)=> post.id !== id);
    res.redirect("/posts");
})

app.listen(port,()=>{
    console.log("Listening on port " + port);
});