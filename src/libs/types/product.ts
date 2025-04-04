import { ObjectId } from 'mongoose';
import { ProductVaolume } from '../enums/product.enum';
import { ProductStatus, 
    ProductSize,ProductCollection } from '../enums/product.enum';

    export interface Product{
        _id: ObjectId;
        productStatus: ProductStatus;
        productCollection: ProductCollection;
        productName :string;
        productPrice: number;
        productLeftCount: number;
        productSize: ProductSize;
        ProductVaolume: number;
        productDesc?: string;
        productImages: string[];
        productViews:number;
    }
export interface ProductInput{
    productStatus?: ProductStatus;
    productCollection: ProductCollection;
    productName :string;
    productPrice: number;
    productLeftCount: number;
    productSize?: ProductSize;
    ProductVaolume?: number;
    productDesc?: string;
    productImages?: string[];
    productViews?:number;
}
    export interface ProductUpdateInput{
        _id: ObjectId;
        productStatus?: ProductStatus;
        productCollection?: ProductCollection;
        productName?:string;
        productPrice?: number;
        productLeftCount: number;
        productSize?: ProductSize;
        ProductVaolume?: number;
        productDesc?: string;
        productImages?: string[];
        productViews?:number;
}