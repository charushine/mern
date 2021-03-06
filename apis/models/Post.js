const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true,
        unique : true
    },
    des : {
        type : String,
        required : true

    },
    photo : {
        type : String,
        required : true
    },
    username : {
        type : string,
        required : true
    },
    categories : {
        type : Array,
        required : true
    }
},{timestamps : true}
);

module.exports = mongoose.model("Post", PostSchema);