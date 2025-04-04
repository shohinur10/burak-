
import { Product, ProductInput, ProductUpdateInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { shapeIntoMongooseObjectId } from "../libs/types/config";

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
    /** SSR */
    public async getAllProducts(): Promise <Product[]>{
    const result = await this.productModel.find().exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND,Message.NO_DATA_FOUND) ;
    return result as unknown as Product[];
}

    public async createNewProduct(input: ProductInput): Promise<Product> {
        try {
            const product = await this.productModel.create(input); // Create new product instance // Save the product to DB
            return product.toObject() as Product; // Cast to Product type
        } catch (err) {
            console.error("Error, model:createNewProduct:", err);
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATION_FAILED);
        }
    }
public async updateChosenProduct(
    id: string,
    input: ProductUpdateInput
): Promise<Product> {
    try {
        id = shapeIntoMongooseObjectId(id);
        const result = await this.productModel.findOneAndUpdate(
            { _id: id },
            input,
            { new: true }
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