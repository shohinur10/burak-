import { ObjectId } from "mongoose";
import { OrderStatus } from "../enums/order.enum";


export interface OrderItem {
    _id: ObjectId;
    itemQuantity: number;
    itemPrice: number;
    orderId: ObjectId;
    productId: ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export interface Order {
    _id: ObjectId;
    orderTotal: number;
    orderDelivery: number;
    orderStatus: OrderStatus;
    memberId: ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
export interface OrderItemInput{
    map(arg0: (item: OrderItemInput) => Promise<string>): unknown;
    itemQuantity: number;
    itemPrice: number;
    productId: ObjectId;
    orderId: ObjectId;
}