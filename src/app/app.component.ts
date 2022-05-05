import { Component } from '@angular/core';
import { EyeColor } from './shared/enum/eye-color.enum';
import { User } from './users/interfaces/user.interface';

@Component({
  // custom elemento pavadinimas
  selector: 'app-root',
  // kelias iki html failo
  templateUrl: './app.component.html',
  // kelias iki stiliu failo
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly EyeColor = EyeColor;
  selectedUser: User | null | undefined;
  selectedLetter: string | undefined;
  // users: User[] = [
  //   {
  //     id: 1,
  //     firstName: 'Denisas',
  //     lastName: 'Jersovas',
  //     age: 32,
  //     address: {
  //       city: 'Vilnius',
  //       country: 'Lithuania',
  //       postalCode: 'LT-81101',
  //       houseNumber: '13a',
  //       flatNumber: '1'
  //     },
  //     eyeColor: EyeColor.Green
  //   },
  //   {
  //     id: 2,
  //     firstName: 'Auste',
  //     lastName: 'Jersova',
  //     age: 30,
  //     address: {
  //       city: 'Vilnius',
  //       country: 'Lithuania',
  //       postalCode: 'LT-81101',
  //       houseNumber: '13a',
  //       flatNumber: '1'
  //     },
  //     eyeColor: EyeColor.Blue
  //   }
  // ]

  get fullSelectedUserName(): string {
    return this.selectedUser ? `${this.selectedUser?.firstName} ${this.selectedUser?.lastName}` : 'Default logo';
  }

  selectUserDetails(user: User): void {
    this.selectedUser = user;
  }

  clearSelectedData(): void {
    this.selectedUser = null;
  }

  ifUserEyeColorIsBlue(userEyeColor: EyeColor): boolean {
    return userEyeColor === EyeColor.Blue;
  }

  onSelectCustomLetter(selectedLetter: string): void {
    this.selectedLetter = selectedLetter;
  }
}
