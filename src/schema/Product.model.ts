import mongoose, {Schema} from "mongoose";
import { ProductCollection, ProductStatus } from '../libs/enums/product.enum';



const productSchema = new Schema(
{
 productStatus: {
    type: String,
    enum: ProductCollection,
    required: true,
 },
   productCollection: {
    type:String ,
    enum: ProductCollection,
    required:true,

 },

productName:{
    type:String,
    required:true, 
},
},
{ timestamps: true} // updatedAt, createdAt
);


export default mongoose.model("Product", productSchema);