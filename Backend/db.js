const mongoose =require('mongoose');
const MONGOuri="mongodb+srv://tmoin06:t.moin06@cluster0.ploxivk.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

const connectToDB= async()=>{
try {
    await mongoose.connect(MONGOuri)
    console.log("Mongo Connected")
    const collection = mongoose.connection.db.collection('userss');

    // Use the find method to retrieve all documents
    const data = await collection.find({}).toArray();
    console.log(data)
   global.user=data;
} catch (error) {
    console.log("error")
    
}
}
module.exports= connectToDB