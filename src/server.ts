

// //architectual patters: MVC, DI, frontendga -> MVP

// //MVC - MODEL VIEW CONTROLLER

// //design paterns: middlewares, decorators 
//async type
// mongoose qulayroq crud amallarini qurish  va collectionlardi hosil qilish uchun ishlatiladi 
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

mongoose
.connect(process.env.MONGO_URL as string, {})
.then((data) => {
    console.log("MongoDB  connection succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function() {
        console.info(`The server is running successfully on port: ${PORT}`);
        console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
})
.catch((err)=> { console.log("ERROR on connnection MongoDB", err)    
});
// cluster => database => collection=> document => dataSet 
