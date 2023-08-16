import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { DisplayHeaderComponent } from './display-header/display-header.component';
import { DisplayFooterComponent } from './display-footer/display-footer.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReferComponent } from './refer/refer.component';
@NgModule({
  declarations: [
    AppComponent,
    UserAuthComponent,
    DisplayHeaderComponent,
    DisplayFooterComponent,
    ReferComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
