import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = this.activatedRoute.snapshot.data['user'] as User;

  updateIsInProgress = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {

  }


  onSaveUserDetails(user: User): void {
    this.updateIsInProgress = true;
    this.usersService.updateUser(user).subscribe(() => this.updateIsInProgress = false)
  }
}
