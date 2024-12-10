import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.cart = this.productService.getCart();
  }

  removeFromCart(product: any) {
    this.productService.removeFromCart(product);
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }
}
