const mongoose = require('mongoose');
const DB = process.env.DATABASE;
mongoose.connect(DB).then(()=>{
    console.log('connection successfully');
}).catch((err)=>{
    console.log('Error!No Connection')
})