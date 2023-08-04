import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginMainComponent } from './login-main/login-main.component';
import{WelcomecomponentComponent} from './welcomecomponent/welcomecomponent.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: LoginMainComponent },
   {path: 'welcomepage',component: WelcomecomponentComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
