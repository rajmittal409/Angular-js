import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Service1Service } from './service1.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddempComponent } from './addemp/addemp.component';
import { DisplayempComponent } from './displayemp/displayemp.component';
import {HttpClient,HttpClientModule} from '@angular/common/Http';
import { OnlinelinkComponent } from './onlinelink/onlinelink.component';
@NgModule({
  declarations: [
    AppComponent,
    AddempComponent,
    DisplayempComponent,
    OnlinelinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient,Service1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
