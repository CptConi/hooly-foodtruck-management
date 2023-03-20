import { Component } from '@angular/core';
import { NavLink } from 'src/app/models/navlink.model';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private navigationService: NavigationService) {}

  public activeLink: string = 'Réservations';
  public links: NavLink[] = [
    { label: 'Réservations', path: '/reservations' },
    { label: 'Foodtrucks', path: '/foodtrucks' },
  ];

  public handleNavigationClick = ($event: NavLink) => {
    this.activeLink = $event.label;
    this.navigationService.navigateTo($event.path);
  };
}
