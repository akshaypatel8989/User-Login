const mongoose = require("mongoose");

//const URI="mongodb://localhost:27017/mydb";

//maongoose.connect(URI);
//const URT ="mongodb+srv://akshaypatel10g:Im0IcTFCvft8OwDh@cluster0.qpgrh4y.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"
const URI=process.env.MONGODB_URI;
const connectDb = async()=>{
    try {
        await mongoose.connect(URI)
        console.log("conneaction successful")
        
    } catch (error) {
        console.error("data coneactiom failed ")
        process.exit(0)
    }
};
module.exports=connectDb;
