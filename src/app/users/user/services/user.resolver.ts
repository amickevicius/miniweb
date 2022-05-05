import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HomePaths } from 'src/app/home/home-paths.const';
import { User } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.usersService.getUser(route.paramMap.get('id') as string).pipe(
      catchError(() => {
        this.router.navigate([HomePaths.root.path]);
        return EMPTY;
      })
    );
  }
}
