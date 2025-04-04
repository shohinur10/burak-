import mongoose, { Schema } from "mongoose";
import { 
    ProductCollection,
    ProductSize, 
    ProductStatus,
} from '../libs/enums/product.enum';
import { ProductVaolume } from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus, // FIXED
      default: ProductStatus.PAUSE,
    },
    productCollection: {
      type: String,
      enum: ProductCollection,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productLeftCount: {
      type: Number,
      required: true,
    },
    productSize: {
      type: String,
      enum: ProductSize,
      default: ProductSize.NORMAL,
    },
    productVaaolume: {
      type: Number,
      enum: ProductVaolume,
      default: ProductVaolume.ONE,
    },
    productDesc: {
      type: String,
    },
    productImage: {
      type: [String],
      default: [],
    },
    productViews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

// Ensures a unique combination of productName, productSize, and productVolume
productSchema.index(
  { productName: 1, productSize: 1, productVaolume: 1 },
  { unique: true }
);

export default mongoose.model("Product", productSchema);
