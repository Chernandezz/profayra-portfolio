import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterModule, CommonModule],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Suscribirse a los eventos de navegación para detectar la ruta actual
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }

  isProjectsPage(): boolean {
    return this.currentRoute.includes('/projects');
  }
}
