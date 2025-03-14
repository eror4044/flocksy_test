import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SubscriptionPageComponent } from "./subscription/subscription-page/subscription-page.component";
import { PlanSelectionComponent } from "./subscription/plan-selection/plan-selection.component";
import { CartComponent } from "./subscription/cart/cart.component";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./subscription/header/header.component";
import { BenefitsItemComponent } from "./shared/benefits-item/benefits-item.component";
import { FloatingButtonComponent } from "./shared/floating-button/floating-button.component";

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionPageComponent,
    PlanSelectionComponent,
    CartComponent,
    HeaderComponent,
    BenefitsItemComponent,
    FloatingButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
