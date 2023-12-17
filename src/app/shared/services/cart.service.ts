// cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  addToCart(book: any) {
    this.items.push(book);
  }

  getCartItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce((total, book) => total + parseFloat(book.prix), 0).toFixed(2);
  }

  removeFromCart(index: number): void {
    this.items.splice(index, 1);
  }
}
