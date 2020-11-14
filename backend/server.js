const express = require("express");
const cors=require('cors');
const ejs = require("ejs");
const mongoose = require('mongoose');


require('dotenv').config();

const app=express();
const port= 5000;

app.use(cors());
app.use(express.json());


mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true)
mongoose.connect("mongodb://localhost:27017/exercise_trackerDB", {useNewUrlParser: true},{ useUnifiedTopology: true },{ useFindAndModify: false });

const exerecisesRouter=require('./routes/exercises');
const usersRouter=require('./routes/users');

app.use('/exercises',exerecisesRouter);
app.use('/users',usersRouter);


app.listen(port, () => {
    console.log("Server started on port 5000");
  });

