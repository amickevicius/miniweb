import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user.component';
import { NewUserViewComponent } from './new-user-view/new-user-view.component';



@NgModule({
  declarations: [
    NewUserComponent,
    NewUserViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NewUserModule { }
