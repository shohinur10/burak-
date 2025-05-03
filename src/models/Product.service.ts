
import { Product, ProductInput, ProductInquiry, ProductUpdateInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import Errors, { HttpCode, Message } from "../libs/utils/Errors";
import { shapeIntoMongooseObjectId } from "../libs/utils/config";
import { ProductStatus } from "../libs/enums/product.enum";
import { T } from "../libs/types/common";

    class ProductService {
      static updateChosenProduct(id: string, body: any) {
        throw new Error("Method not implemented.");
      }
      static createNewProduct(data: ProductInput) {
        throw new Error("Method not implemented.");
      }
      static getAllProducts() {
        throw new Error("Method not implemented.");
      }
        private readonly productModel
        constructor() {
           this.productModel = ProductModel
        }

    /** SPA */
    public async getProducts(inquiry: ProductInquiry): Promise<Product[]>{
      const match: T ={ProductStatus: ProductStatus.PROCESS};
      if (inquiry.productCollection)
        match.productCollection = inquiry.productCollection;
      if (inquiry.search)
        match.productName ={
      $regex:new RegExp(inquiry.search, "i")};
        const sort: T =
          inquiry.order === "productPrice"
            ? { [inquiry.order]: 1 }
            : { [inquiry.order]: -1 };

        const result  = await this.productModel
        .aggregate([
          { $match: match },
          { $sort: sort },
          { $skip: (inquiry.page * 1 - 1) * inquiry.limit },
          { $limit: inquiry.limit * 1 },
        ])
       .exec();
        if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

      return result;
    }

    /** SSR */
    public async getAllProducts(): Promise <Product[]>{
      // Promise bu shu funksiyani natijasi 
      //Model: productModel;
      //Query: this .productModel.find();
      //Query++++:exec();:
    const result = await this.productModel.find().exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND,Message.NO_DATA_FOUND) ;
    return result as unknown as Product[];
}

public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      const result = await this.productModel.create(input);
      return result.toObject() as Product;
    } catch (err) {
      console.error("Error creating product:", err);
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATION_FAILED);
    }
  } 
public async updateChosenProduct(
    id: string,
    input: ProductUpdateInput
): Promise<Product> {
    try {
        id = shapeIntoMongooseObjectId(id);
        //input ichidan id qabul qilib uni shape qilib olamiz 
        const result = await this.productModel.findOneAndUpdate(
            { _id: id },//filter
            input,// update
            { new: true }// options
        ).exec();
        if (!result) {
            throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
        }
        console.log("result:", result);
        return result.toObject() as Product;
    } catch (err) {
        console.error("Error, model:updateChosenProduct:", err);
        throw new Errors(HttpCode.BAD_REQUEST, Message.UPDATE_FAILED);
    }
}
}

export default ProductService;