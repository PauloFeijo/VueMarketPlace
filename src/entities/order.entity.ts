import { Product } from "./product.entity";

export class Order {
    public id: number;
    public name: string;
    public isDelivery: boolean;
    public taxDelivery: number;
    public address: string;
    public totalPrice: number;
    public products: Product[];

    constructor(order: any = {}) {
        this.id = order.id;
        this.name = order.name;
        this.isDelivery = order.isDelivery;
        this.taxDelivery = order.taxDelivery;
        this.address = order.address;
        this.totalPrice = order.totalPrice;
        this.products = order.products;                              
    }
}