import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of, Subject, throwError } from 'rxjs';
import { catchError, defaultIfEmpty, mapTo, publishReplay, refCount, share, startWith, switchMap } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  refreshUsersListSubject$ = new BehaviorSubject<boolean>(true);
  users$ = this.refreshUsersListSubject$.pipe(
    switchMap(() => this.usersService.getUsers().pipe(
      catchError((error) => {
        if (error.status === 404) {
          this.errorMessage = 'Not found';
        }

        if (error.status === 500) {
          this.errorMessage = 'Happened internal server error :)'
        }
        return of(null)
      }),
    )),
    publishReplay(1), refCount()
  );

  loading$ = this.users$.pipe(
    mapTo(false),               // map emit to false
    defaultIfEmpty(false),      // if nothing emitted - emit false
    startWith(true),            // start as loading right away
    catchError(() => of(false)) // on error - emit false
  )

  errorMessage: string | undefined;

  constructor(private usersService: UsersService) { }

  onDeleteUser(userId: number): void {
    this.usersService.deleteUser(userId).pipe(
    ).subscribe(() => {
      this.refreshUsersListSubject$.next(true)
    })
  }
}
