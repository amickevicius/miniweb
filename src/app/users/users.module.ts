import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { UsersListModule } from './users-list/users-list.module';
import { UsersComponent } from './users.component';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsersListModule,
    UserModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
