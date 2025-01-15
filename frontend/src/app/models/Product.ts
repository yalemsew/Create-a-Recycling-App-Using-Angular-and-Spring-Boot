
//Task 16: Write code for Product.ts model here
// Task 16: Write code for Product.ts model here
export class Product {
  id: Number;
  name: string;
  description: string;
  price: Number;
  addedOn: Date;
  image: Uint8Array;
  imageUrl: string;

  constructor(id: Number, name: string, description: string, price: Number, addedOn: Date, image: Uint8Array, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.addedOn = addedOn;
    this.image = image;
    this.imageUrl = imageUrl;
  }
}
