const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat');
const methodOverride = require('method-override');


app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

main()
   .then(() => console.log("Connection successful"))
   .catch(err=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//index route
app.get('/chats',async (req,res)=>{
   let chats = await Chat.find();
   res.render('index.ejs',{chats});
// res.send('Working'); Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client (After render)
});

//Ner route
app.get('/chats/new',(req,res)=>{
    res.render('new.ejs');
});

//create route
app.post('/chats',(req,res)=>{
    let {from,to,message} = req.body;
    let newChat = new Chat({
     from: from,
     to: to,
     message: message,
     createdAt : new Date()
    });
   
    newChat.save().then((res)=>{console.log("Success")}).catch((error)=>{console.log(error)})
    res.redirect('/chats');
});


//Edit route
app.get('/chats/:id/edit',async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id)
    res.render('edit.ejs',{chat});
});

//Update route
app.put('/chats/:id',async (req,res)=>{
   let {id} = req.params;
   let {message: newMessage} = req.body;
   let updatedChat = await Chat.findByIdAndUpdate(id,
    {message : newMessage},
    {runValidators : true, new : true});
    console.log(updatedChat);
    res.redirect('/chats');
})

//delete route
app.delete('/chats/:id',async (req,res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect('/chats')
});

app.get('/', (req, res) => {
  res.send("Root is working")
});

app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
});