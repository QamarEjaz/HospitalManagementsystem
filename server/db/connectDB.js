const mongoose = require('mongoose');

const connectDB = async () => {
  return await mongoose.connect('mongodb+srv://QAMAR:svCQTstDYVpcOPiP@cluster0.ens96.mongodb.net/qamar_ijaz?retryWrites=true&w=majority')
  .then(()=>console.log("db connected"));
};

module.exports = connectDB;
