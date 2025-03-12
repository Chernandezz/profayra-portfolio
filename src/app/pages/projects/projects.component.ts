import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: any[] = [];

  constructor(private translate: TranslateService) {
    // Cargar proyectos dinámicamente desde el archivo de traducción
    this.translate.get('HOME.PROJECTS.LIST').subscribe((projects) => {
      this.projects = projects;
    });

    // Actualizar proyectos cuando cambie el idioma
    this.translate.onLangChange.subscribe(() => {
      this.translate.get('HOME.PROJECTS.LIST').subscribe((projects) => {
        this.projects = projects;
      });
    });
  }
}
