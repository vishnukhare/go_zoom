const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors= require('cors')
const app = express();
const connectToDb = require('./db/db')
const userRouter = require('./routes/user.routes');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/users',userRouter);

app.get('/',(req,res)=>{
    res.send('Hello World');
});




module.exports=app;