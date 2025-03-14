import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CartService } from "../cart.service";

@Component({
  selector: "app-subscription-page",
  templateUrl: "./subscription-page.component.html",
  styleUrls: ["./subscription-page.component.css"],
})
export class SubscriptionPageComponent {
  constructor(private cartService: CartService) {}
  selectedDuration: "monthly" | "quarterly" | "yearly" = "monthly";

  setDuration(duration: "monthly" | "quarterly" | "yearly"): void {
    this.selectedDuration = duration;
    this.cartService.updatePrices(duration);
  }
}
