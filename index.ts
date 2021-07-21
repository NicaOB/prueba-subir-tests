class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  name: string;
  price: number;
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
}
// var item = new User("Tienda: Los rocos");
// var caracteristicas = new Product("chocolate", 70.50);
// var caracteristicas2 = new Product("mate", 60);
// item.addProduct(caracteristicas);
// item.addProduct(caracteristicas2);
// console.log(item);
export { User, Product };
