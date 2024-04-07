const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Faf",
    to: "Virat",
    message: "Now you are going to lead the team",
    createdAt: new Date(),
  },
  {
    from: "Green",
    to: "Maxwell",
    message: "It is a Big Show time",
    createdAt: new Date(),
  },
  {
    from: "Will",
    to: "Faf",
    message: "Can i join you guys?",
    createdAt: new Date(),
  },
];
Chat.insertMany(allChats);
