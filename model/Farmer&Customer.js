const mongoose = require("mongoose");
const { Schema } = mongoose;

const FarmerCustomerSchema = new Schema({
     Fullname : { type: String, required: true, unique: true },
     Email: { type: String, required: true, unique: true },
     Username: { type: String ,required : true, unique: true },
     Password: {type:String, required:true},
});

const Foo = mongoose.model("FarmerCustomerSchema", FarmerCustomerSchema);
Foo.createIndexes();
exports.FarmerCustomerSchema = Foo;
