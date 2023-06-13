import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LogupComponent } from './components/logup/logup.component';
import { OfferComponent } from './components/offer/offer.component';
import { RentComponent } from './components/rent/rent.component';
import { PayComponent } from './components/pay/pay.component';
import { CardComponent } from './components/card/card.component';
import { FormComponent } from './components/form/form.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
},
{
  path: 'login',
  component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'logup',
    component: LogupComponent,
    },
  {
    path: 'offer',
    component: OfferComponent,
  },
  {
    path: 'rent',
    component: RentComponent,
  },
  {
    path: 'pay',
    component: PayComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
