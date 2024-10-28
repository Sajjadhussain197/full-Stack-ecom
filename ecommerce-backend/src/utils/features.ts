import mongoose from "mongoose"
export const connectDb=()=>{
    mongoose.connect("mongodb://localhost:27017",
        {
            
        dbName:"Ecommerce_2024"
        }
    ).then(c=>console.log(`Connected to DB ${c.connection.host}`))
    .catch(e=>console.log(e));

}