const mongoose = require('mongoose');// 
const uri = "mongodb+srv://new:abcd@uber.pnr85.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=uber";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

function connectToDb() {
    mongoose.connect(uri, clientOptions)
        .then(() => {
            console.log('Connected to DB');
        })
        .catch(err => {
            console.error('Error connecting to DB:', err);
        });
}

module.exports = connectToDb;
