import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionPageComponent } from './subscription/subscription-page/subscription-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/subscription', pathMatch: 'full' },
  { path: 'subscription' , component: SubscriptionPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
