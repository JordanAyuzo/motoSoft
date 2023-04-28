import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LogupComponent } from './components/logup/logup.component';
//borrar
import { NavbarComponent } from './components/navbar/navbar.component'; 
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
      path: 'navbar',
      component: NavbarComponent,
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
