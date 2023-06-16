import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LogupComponent } from './components/logup/logup.component';
import { OfferComponent } from './components/offer/offer.component';
import { RentComponent } from './components/rent/rent.component';
import { PayComponent } from './components/pay/pay.component';
import { CardComponent } from './components/card/card.component';
import {IncidenciaComponent} from "./components/incidencia/incidencia.component";
import { DetalleRentaComponent } from './components/detalle-renta/detalle-renta.component';
import { ReservasComponent } from './components/reservas/reservas.component';

import { FormComponent } from './components/form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    LogupComponent,
    OfferComponent,
    RentComponent,
    PayComponent,
    CardComponent,
    IncidenciaComponent,
    DetalleRentaComponent,
    ReservasComponent
    DetalleRentaComponent
    IncidenciaComponent
    FormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbDropdownModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
