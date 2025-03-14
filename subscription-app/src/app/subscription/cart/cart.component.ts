import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { CartService } from "../cart.service";
import { Router } from "@angular/router";
import { CartItem } from "src/app/models/cart-item";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  @Input() duration: "monthly" | "quarterly" | "yearly" = "monthly";
  cartItems: CartItem[] = [];
  total = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["duration"]) {
      this.calculateTotal();
    }
  }

  calculateTotal(): void {
    let sum = 0;
    this.cartItems.forEach((item) => {
      const price = this.getDiscountedPrice(item.monthlyPrice, this.duration);
      sum += price * item.quantity;
    });
    this.total = sum;
  }

  getDiscountedPrice(price: number, duration: string): number {
    if (duration === "quarterly") {
      return price * 3 * 0.9;
    } else if (duration === "yearly") {
      return price * 12 * 0.85;
    }
    return price;
  }

  isCartNotEmpty(): boolean {
    return this.cartService.getCartItems().length > 0;
  }

  goToCheckout(): void {
    this.router.navigate(["/checkout"]);
  }

  deleteCartItem(cartItem: CartItem): void {
    this.cartService.deleteCartItem(cartItem);
  }
}
