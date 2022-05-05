import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { User } from 'src/app/users/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // private users: User[] = 

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:3000/users')
      .pipe(
        delay(3000),
        // switchMap(a => throwError(new HttpErrorResponse({ status: 404 }))),
      );
  }

  deleteUser(userId: number): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:3000/users/${userId}`);
  }

  getUser(userId: string): Observable<User> {
    return this.httpClient.get<User>(`http://localhost:3000/users/${userId}`).pipe(
      // switchMap(a => throwError(new HttpErrorResponse({ status: 404 })))
    );
  }

  updateUser(user: User): Observable<void> {
    return this.httpClient.put<void>(`http://localhost:3000/users/${user.id}`, user)
  }

  // addUser(user: User): User[] {
  //   return this.users = [...this.users, user]
  // }
}

