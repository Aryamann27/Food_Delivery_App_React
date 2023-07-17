const express = require('express');
const app = express()
const port = 5000
const cors = require('cors');
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://aryaman0527:test123@cluster0.pgpirgz.mongodb.net/food-app?retryWrites=true&w=majority'


app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
});
app.use(cors());

const menuRoutes = require('./routes/menuRoutes');
app.use('/api/menu', menuRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const diningRoutes = require('./routes/diningRoutes');
app.use('/api/dining/', diningRoutes);

mongoose.connect(mongoURI)
.then(()=>{
    //listen for requests
    app.listen(port, ()=>{
    console.log("Connected to the database, listening on port "+port);
})
})
.catch((error)=>{
    console.log(error);
})

