export class Product {
    public id: number;
    public title: string;
    public description: string;
    public imageSrc: string;
    public price: number;
    public quantity: number;

    get totalPrice(): number{
        return this.price * this.quantity;
    };

    constructor(product: any = {}) {
        this.id = product.id;
        this.title = product.title;
        this.description = product.description;
        this.imageSrc = product.imageSrc;
        this.price = product.price;
        this.quantity = product.quantity;                                
    }
}