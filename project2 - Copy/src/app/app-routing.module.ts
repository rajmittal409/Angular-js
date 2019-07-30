import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { DisplayempComponent } from './displayemp/displayemp.component';


const routes: Routes = [
  {
    path:'app-add-employee',
    component: AddempComponent
  },
  
  {
    path:'app-employee-list',
    component: DisplayempComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
