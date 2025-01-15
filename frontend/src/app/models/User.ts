//Task 16: Write code for User.ts model here
import {CartItem} from "./CartItem";

export interface User {
  id : Number
  username : string
  password : string
  email : string
  name : string
  address : string
  phone : string
  cartItems : CartItem[]
}
