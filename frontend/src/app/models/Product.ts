
//Task 16: Write code for Product.ts model here
// Task 16: Write code for Product.ts model here
export interface Product {
  id: Number;
  name: string;
  description: string;
  price: Number;
  addedOn: Date;
  image: Uint8Array;
  imageUrl: string;
}
