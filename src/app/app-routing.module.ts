import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePaths } from './home/home-paths.const';
import { HomeComponent } from './home/home.component';
import { MoviesPaths } from './movies/movies-paths.const';
import { MoviesComponent } from './movies/movies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersGuard } from './users/guard/users.guard';
import { UserResolver } from './users/user/services/user.resolver';
import { UserComponent } from './users/user/user.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersPaths } from './users/users-paths.const';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: HomePaths.root.path
  },
  {
    path: HomePaths.root.path,
    component: HomeComponent
  },
  {
    path: UsersPaths.root.path,
    component: UsersComponent,
    canActivate: [UsersGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: UsersPaths.list.path
      },
      {
        path: UsersPaths.list.path,
        component: UsersListComponent
      },
      {
        path: UsersPaths.details.path,
        component: UserComponent,
        resolve: { user: UserResolver }
      }
    ]
  },
  {
    path: MoviesPaths.root.path,
    component: MoviesComponent
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
