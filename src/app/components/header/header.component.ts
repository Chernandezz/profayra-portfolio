import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Seleccionamos el elemento header de este componente
    const header = this.el.nativeElement.querySelector('.header');
    // Si el scroll vertical supera 100px, agregamos la clase "scrolled"
    if (window.pageYOffset > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}
