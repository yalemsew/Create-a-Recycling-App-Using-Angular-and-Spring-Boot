//Task 16: Write code for User.ts model here
export class User {
  id : Number
  username : string
  password : string
  email : string
  name : string
  address : string
  phone : string
  cartItems : [any]

  constructor(id: Number, username: string, password: string, email: string, name: string, address: string, phone: string, cartItems: [any]) {
    this.id = id
    this.username = username
    this.password = password
    this.email = email
    this.name = name
    this.address = address
    this.phone = phone
    this.cartItems = cartItems
  }
}
