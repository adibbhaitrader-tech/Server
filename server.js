require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongo Connected"))
.catch(err=>console.log(err));

app.get("/", (req,res)=>{
  res.send("NB Online Shop API Running");
});

app.listen(5000, ()=>console.log("Server running on port 5000"));
