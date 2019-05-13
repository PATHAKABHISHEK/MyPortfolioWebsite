const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MyPorfolio',
                {useNewUrlParser: true} ,(err) =>{
    if(err){
        console.log(err);
    }else{
        console.log('mongodb connected successfully')
    }
});

module.exports = mongoose;