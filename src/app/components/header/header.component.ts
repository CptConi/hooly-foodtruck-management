import { Component, OnInit } from '@angular/core';
import { NavLink } from 'src/app/models/navlink.model';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}

  public activeLink = 'Réservations';
  public links: NavLink[] = [
    { label: 'Réservations', path: '/reservations' },
    { label: 'Foodtrucks', path: '/foodtrucks' },
  ];

  ngOnInit(): void {
    this.navigationService.routerEvents$.subscribe((_) => {
      this.activeLink = this.navigationService.location.includes('reservations')
        ? 'Réservations'
        : 'Foodtrucks';
    });
  }

  public handleNavigationClick = ($event: NavLink) => {
    this.navigationService.navigateTo($event.path);
  };
}
