import test from "ava";
import {User, Product} from "./index"

var newUser = new User ("Tienda : Los Rocos");
var newProduct = new Product("Chocolate", 60);
newUser.addProduct(newProduct);
test("Testeo la clase User", (t) => {
    t.is(newUser.name, "Tienda : Los Rocos");
});
test("Testeo la clase Product y sus métodos", (t) => {
    t.is(newUser.products[0].name, "Chocolate");
    t.is(newUser.products[0].price, 60);
    // texto modificado para prueba
});
