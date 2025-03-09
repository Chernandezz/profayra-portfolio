import { Component, OnInit, HostListener } from '@angular/core';
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
export class HeaderComponent implements OnInit {
  currentRoute: string = '';
  isMenuCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    // Suscribirse a los eventos de navegación para detectar la ruta actual
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
        this.isMenuCollapsed = true;
      });
  }

  isHomePage(): boolean {
    return this.currentRoute === '/' || this.currentRoute === '';
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  closeMenu() {
    if (!this.isMenuCollapsed) {
      this.isMenuCollapsed = true;
      document.body.style.overflow = '';
    }
  }

  // Cerrar menú con la tecla Escape
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && !this.isMenuCollapsed) {
      this.closeMenu();
    }
  }
}
