import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import { Userpipe1Pipe } from './userpipe1.pipe';
import { EmppositionPipe } from './empposition.pipe';
import { Directive1Directive } from './directive1.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewprojectComponent,
    NewemployeeComponent,
    Userpipe1Pipe,
    EmppositionPipe,
    Directive1Directive,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
