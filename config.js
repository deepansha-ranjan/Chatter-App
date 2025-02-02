// import mongoose from 'mongoose';

// export const connect = async()=>{
//     await mongoose.connect("mongodb://127.0.0.1:27017/chatApp", {
//         // useNewUrlParser: true,
//         // useUnifiedTopology: true
//     });
//     console.log("Db is connected");
// }

import mongoose from 'mongoose';

export const connect = async()=>{
    await mongoose.connect("mongodb+srv://testuser:deepansha123@cluster0.tflfe5q.mongodb.net/chatApp", {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    });
    console.log("Db is connected");
}