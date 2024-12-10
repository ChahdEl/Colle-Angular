import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    { id: 1, name: 'computer', price: 10000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFf3-mCkY8C0qUZo_pb4J516jOiGxcISQa1A&s' },
    { id: 2, name: 'phone', price: 2000, image: 'https://m.media-amazon.com/images/I/610BUxOTRgL.jpg' },
    { id: 3, name: 'cassque', price: 300, image: 'https://mediazone.ma/uploads/images/products/14671/14671-83ulc51F.webp' },
    { id: 4, name: 'clavier', price: 500, image: 'https://www.atacbureau.com/web/image/product.template/6339/image' },
    { id: 5, name: 'souris', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zhRvGDN1ER_SrywOJ04Sb2tcWc8ovB5m7Q&s' }
  ];

  cart: any = [];

  getProducts() {
    return this.products;
  }

  getCart() {
    return this.cart;
  }

  addToCart(product: any) {
    const foundProduct = this.cart.find((item: { id: any; }) => item.id === product.id);
    if (foundProduct) {
      foundProduct.quantity += 1;  // Incrémente la quantité si le produit existe déjà
    } else {
      this.cart.push({ ...product, quantity: 1 });  // Ajoute le produit avec une quantité de 1
    }
  }

  removeFromCart(product: any) {
    const index = this.cart.findIndex((item: { id: any; }) => item.id === product.id);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  getTotal() {
    return this.cart.reduce((sum: number, item: { price: number; quantity: number; }) => sum + item.price * item.quantity, 0);  // Calcule le total en tenant compte de la quantité
  }
}
