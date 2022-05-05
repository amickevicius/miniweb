import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersListViewComponent } from './users-list-view/users-list-view.component';
import { UsersListComponent } from './users-list.component';



@NgModule({
  declarations: [
    UsersListComponent,
    UsersListViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersListModule { }
