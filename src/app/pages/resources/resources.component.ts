import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Resource {
  name: string;
  type: 'pdf' | 'code' | 'template' | 'link' | 'github' | 'other';
  link: string;
}

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoId: string; // ID de YouTube
  duration: string;
  publishDate: string;
  tags: string[];
  featured: boolean;
  resources: Resource[];
}

@Component({
  selector: 'app-video-resources',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  // Términos de búsqueda y filtros
  searchTerm: string = '';
  selectedTag: string = '';

  // Arrays para videos y filtrados
  videos: Video[] = [];
  filteredVideos: Video[] = [];

  // Constructor
  constructor() {}

  ngOnInit() {
    // Inicializar datos
    this.videos = this.getVideosData();
    this.filterVideos();
  }


  // Método para obtener video destacado (si existe)
  get featuredVideo(): Video | null {
    return this.videos.find((video) => video.featured) || null;
  }

  // Método para filtrar videos según búsqueda y tag seleccionado
  filterVideos() {
    this.filteredVideos = this.videos.filter((video) => {
      // Filtrar por término de búsqueda
      const matchesSearch =
        !this.searchTerm ||
        video.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(this.searchTerm.toLowerCase());

      // Debe cumplir ambas condiciones
      return matchesSearch;
    });
  }

  // Método para ir al video en YouTube
  watchVideo(videoId: string) {
    window.open(`https://youtube.com/watch?v=${videoId}`, '_blank');
  }

  // Método para obtener icono según tipo de recurso
  getResourceIcon(type: string): string {
    switch (type) {
      case 'pdf':
        return 'fas fa-file-pdf';
      case 'code':
        return 'fas fa-code';
      case 'template':
        return 'fas fa-file-alt';
      case 'link':
        return 'fas fa-external-link-alt';
      case 'github':
        return 'fab fa-github';
      default:
        return 'fas fa-file';
    }
  }

  // Datos de prueba
  private getVideosData(): Video[] {
    return [
      {
        id: 1,
        title: 'Como homologue mi titulo universitario en el extranjero',
        description:
          'En este video aprenderás los conceptos básicos de Python: variables, listas, bucles y funciones. Todo lo esencial para comenzar a programar.',
        thumbnail: 'assets/thumbnails/python-10min.webp',
        videoId: 'abc123',
        duration: '10:15',
        publishDate: '2025-03-01',
        tags: ['Python', 'Programación', 'Principiantes'],
        featured: false,
        resources: [
          {
            name: 'Link UCF',
            type: 'link',
            link: 'https://graduate.ucf.edu/application-deadlines-and-requirements/masters/2025/#computer-engineering-mscpe',
          },
          {
            name: 'Documento evaluadores',
            type: 'pdf',
            link: 'https://drive.google.com/file/d/1qd2aOCIaUqaZ-tAKQleq_0XfwQmbGPjN/view?usp=sharing',
          },
          {
            name: 'Plantillas emails',
            type: 'template',
            link: 'https://drive.google.com/file/d/1qd2aOCIaUqaZ-tAKQleq_0XfwQmbGPjN/view?usp=sharing',
          },
        ],
      },
      {
        id: 2,
        title: 'Cómo homologar tu título universitario en el extranjero',
        description:
          'Guía completa sobre el proceso de homologación de títulos universitarios, documentación necesaria y plazos.',
        thumbnail: 'assets/thumbnails/homologacion.webp',
        videoId: 'def456',
        duration: '15:30',
        publishDate: '2025-02-15',
        tags: ['Educación', 'Trámites', 'Internacional'],
        featured: false,
        resources: [
          {
            name: 'Checklist de documentos',
            type: 'pdf',
            link: '/assets/downloads/checklist-homologacion.pdf',
          },
          {
            name: 'Enlaces oficiales',
            type: 'link',
            link: '/recursos/homologacion-enlaces',
          },
        ],
      },
      {
        id: 3,
        title:
          'Git y GitHub para principiantes - Control de versiones explicado',
        description:
          'Aprende a usar Git y GitHub desde cero. Comandos básicos, gestión de ramas, pull requests y mucho más.',
        thumbnail: 'assets/thumbnails/git-github.webp',
        videoId: 'ghi789',
        duration: '25:45',
        publishDate: '2025-02-20',
        tags: ['Git', 'GitHub', 'Programación', 'Control de versiones'],
        featured: false,
        resources: [
          {
            name: 'Comandos esenciales',
            type: 'pdf',
            link: '/assets/downloads/git-commands.pdf',
          },
          {
            name: 'Proyecto de práctica',
            type: 'github',
            link: 'https://github.com/ejemplo/git-practice',
          },
        ],
      },
      {
        id: 4,
        title:
          'Cómo crear una landing page que convierte - Tips de marketing digital',
        description:
          'En este tutorial te muestro paso a paso cómo diseñar una landing page efectiva que aumentará tus conversiones.',
        thumbnail: 'assets/thumbnails/landing-page.webp',
        videoId: 'jkl012',
        duration: '18:20',
        publishDate: '2025-01-10',
        tags: ['Marketing Digital', 'Diseño Web', 'Conversión'],
        featured: false,
        resources: [
          {
            name: 'Plantilla HTML/CSS',
            type: 'code',
            link: '/assets/downloads/landing-template.zip',
          },
          {
            name: 'Checklist de optimización',
            type: 'pdf',
            link: '/assets/downloads/landing-checklist.pdf',
          },
        ],
      },
      {
        id: 5,
        title: 'Configuración de VSCode para desarrollo web moderno',
        description:
          'Optimiza tu entorno de desarrollo con las mejores extensiones y configuraciones para desarrollo web en VSCode.',
        thumbnail: 'assets/thumbnails/vscode-setup.webp',
        videoId: 'mno345',
        duration: '12:30',
        publishDate: '2025-02-05',
        tags: ['VSCode', 'Herramientas', 'Programación', 'Desarrollo Web'],
        featured: false,
        resources: [
          {
            name: 'Archivo de configuración',
            type: 'code',
            link: '/assets/downloads/vscode-settings.json',
          },
          {
            name: 'Lista de extensiones',
            type: 'pdf',
            link: '/assets/downloads/vscode-extensions.pdf',
          },
        ],
      },
    ];
  }
}
