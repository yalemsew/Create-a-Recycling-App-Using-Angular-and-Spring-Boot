import { Product } from './Product';

export class CartItem {
  addedOn: Date;
  quantity: number;
  product: Product;
  totalPrice: Number;

  constructor(addedOn: Date, quantity: number, product: Product, totalPrice: Number) {
    this.addedOn = addedOn;
    this.quantity = quantity;
    this.product = product;
    this.totalPrice = totalPrice;
  }
}
