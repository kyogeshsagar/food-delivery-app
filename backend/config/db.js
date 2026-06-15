import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://kyogeshsagar100_db_user:KGOpalRao@cluster0.vrl3bpc.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}