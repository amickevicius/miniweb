import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { UsersPaths } from '../../users-paths.const';

@Component({
  selector: 'app-users-list-view',
  templateUrl: './users-list-view.component.html',
  styleUrls: ['./users-list-view.component.scss']
})
export class UsersListViewComponent implements OnChanges {
  readonly UsersPaths = UsersPaths;

  @Input() users: User[] | undefined | null;

  @Output() deleteUser = new EventEmitter<number>();

  constructor(private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  onDeleteBtnClick(userId: number): void {
    this.deleteUser.emit(userId);
  }

  onInfoBtnClick(userId: number): void {
    this.router.navigate([UsersPaths.root.path, userId], {
      
    })
  }
}
