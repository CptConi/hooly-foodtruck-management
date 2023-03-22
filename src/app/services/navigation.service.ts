import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  public get location() {
    return this.router.url;
  }

  public navigateTo = (path: string) => {
    this.router.navigate([path]);
  };

  public doesUrlContains = (path: string) => {
    return this.router.url.includes(path);
  };

  public routerEvents$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd)
  );
}
