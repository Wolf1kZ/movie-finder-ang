import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
  private router: Router
  ) { }

  clickSearch(): void {
    this.router.navigateByUrl('search');
  }

  clickTop(): void {
    this.router.navigateByUrl('');
  }

  clickGenres(): void {
    this.router.navigateByUrl('genresFilms');
  }

}
