import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionPageComponent } from './subscription/subscription-page/subscription-page.component';
import { PlanSelectionComponent } from './subscription/plan-selection/plan-selection.component';
import { CartComponent } from './subscription/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionPageComponent,
    PlanSelectionComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
