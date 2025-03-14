import { Component, Input, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { CartItem } from "src/app/models/cart-item";

@Component({
  selector: "app-plan-selection",
  templateUrl: "./plan-selection.component.html",
  styleUrls: ["./plan-selection.component.css"],
})
export class PlanSelectionComponent implements OnInit {
  @Input() duration: "monthly" | "quarterly" | "yearly" = "monthly";

  plans: CartItem[] = [
    { name: "Silver Plan", monthlyPrice: 55, quantity: 0, price: 0 },
    { name: "Gold Plan", monthlyPrice: 75, quantity: 0, price: 0 },
    { name: "Platinum Plan", monthlyPrice: 95, quantity: 0, price: 0 },
  ];

  quantities = Array.from({ length: 11 }, (_, i) => i);

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((items: CartItem[]) => {
      this.plans.forEach((plan) => {
        const itemInCart = items.find((item) => item.name === plan.name);
        plan.quantity = itemInCart ? itemInCart.quantity : 0;
      });
    });
  }

  getPlanPrice(plan: any): number {
    switch (this.duration) {
      case "monthly":
        return plan.monthlyPrice;
      case "quarterly":
        return plan.monthlyPrice * 3 * 0.9;
      case "yearly":
        return plan.monthlyPrice * 12 * 0.85;
      default:
        return plan.monthlyPrice;
    }
  }

  onQuantityChange(plan: any) {
    this.cartService.updatePlan(plan, this.duration);
  }
}
