import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { HomePaths } from '../home/home-paths.const';
import { MoviesPaths } from '../movies/movies-paths.const';
import { UsersPaths } from '../users/users-paths.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  readonly HomePaths = HomePaths;
  readonly UsersPaths = UsersPaths;
  readonly MoviesPaths = MoviesPaths;
  
  @Input() userFirstAndLastName: string | null | undefined;
  constructor() { }

  ngOnInit(): void {
    // window.alert('component is created')
  }

  ngOnDestroy(): void {
    // window.alert('component is destroyed')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
