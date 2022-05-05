import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { EyeColor } from '../shared/enum/eye-color.enum';
import { User } from './interfaces/user.interface';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  

  addUser(): void {
    const userToAdd = {
      id: 2,
      firstName: 'Auste-1',
      lastName: 'Jersova-1',
      age: 30,
      address: {
        city: 'Vilnius',
        country: 'Lithuania',
        postalCode: 'LT-81101',
        houseNumber: '13a',
        flatNumber: '1'
      },
      eyeColor: EyeColor.Blue
    }

    // this.users = this.usersService.addUser(userToAdd);
  }
}