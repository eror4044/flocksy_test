import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CartItem } from "../models/cart-item";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor() {}

  updatePrices(duration: "monthly" | "quarterly" | "yearly"): void {
    this.cartItems.forEach((item) => {
      if (duration === "monthly") {
        item.price = item.monthlyPrice;
      } else if (duration === "quarterly") {
        item.price = item.monthlyPrice * 3 * 0.9;
      } else if (duration === "yearly") {
        item.price = item.monthlyPrice * 12 * 0.85;
      }
    });
    this.cartSubject.next([...this.cartItems]);
  }

  updatePlan(plan: CartItem, duration: string) {
    if (plan.quantity === 0) {
      this.cartItems = this.cartItems.filter((item) => item.name !== plan.name);
    } else {
      const existingItem = this.cartItems.find(
        (item) => item.name === plan.name
      );
      if (existingItem) {
        existingItem.quantity = plan.quantity;
      } else {
        this.cartItems.push({
          name: plan.name,
          price: plan.price,
          quantity: plan.quantity,
          monthlyPrice: plan.monthlyPrice,
        });
      }
    }
    this.cartSubject.next([...this.cartItems]);
  }

  getCartItems() {
    return [...this.cartItems];
  }

  deleteCartItem(cartItem: CartItem): void {
    this.cartItems = this.cartItems.filter(
      (item) => item.name !== cartItem.name
    );
    this.cartSubject.next([...this.cartItems]);
  }
}
