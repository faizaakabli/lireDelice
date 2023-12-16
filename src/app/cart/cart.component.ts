// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total: string = "0.00"; 

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartService.getTotal();
  }
}
