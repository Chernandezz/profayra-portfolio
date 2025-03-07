import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      name: 'E-Commerce Dashboard',
      description:
        'Panel de administración completo para tiendas online con análisis de ventas y gestión de inventario.',
      imageUrl: 'assets/banner.png',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      projectLink: 'https://example.com/ecommerce-dashboard',
      githubLink: 'https://github.com/profayra/ecommerce-dashboard',
    },
    {
      id: 2,
      name: 'App de Finanzas Personales',
      description:
        'Aplicación para seguimiento de gastos, presupuestos y visualización de hábitos financieros personales.',
      imageUrl: 'assets/banner.png',
      technologies: ['React', 'Firebase', 'Chart.js', 'Material UI'],
      projectLink: 'https://example.com/finance-app',
      githubLink: 'https://github.com/profayra/finance-tracker',
    },
    {
      id: 3,
      name: 'Sistema de Gestión Educativa',
      description:
        'Plataforma para administración de cursos, estudiantes y calificaciones con módulos de comunicación.',
      imageUrl: 'assets/banner.png',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
      projectLink: 'https://example.com/education-system',
      githubLink: 'https://github.com/profayra/education-management',
    },
    {
      id: 4,
      name: 'API de Procesamiento de Datos',
      description:
        'Servicio RESTful para transformación y análisis de grandes volúmenes de datos con autenticación OAuth.',
      imageUrl: 'assets/banner.png',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
      projectLink: 'https://example.com/data-api',
      githubLink: 'https://github.com/profayra/data-processing-api',
    },
    {
      id: 5,
      name: 'Aplicación de Notas Colaborativas',
      description:
        'Herramienta para tomar notas en tiempo real con opciones de colaboración y organización avanzada.',
      imageUrl: 'assets/banner.png',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      projectLink: 'https://example.com/collaborative-notes',
      githubLink: 'https://github.com/profayra/collab-notes',
    },
    {
      id: 6,
      name: 'Plataforma de Eventos Virtuales',
      description:
        'Sistema para organización y gestión de conferencias virtuales con salas interactivas y networking.',
      imageUrl: 'assets/banner.png',
      technologies: ['Angular', 'WebRTC', 'Node.js', 'Firebase'],
      projectLink: 'https://example.com/virtual-events',
      githubLink: 'https://github.com/profayra/virtual-events-platform',
    },
    {
      id: 7,
      name: 'App de Seguimiento Fitness',
      description:
        'Aplicación móvil para seguimiento de entrenamientos, nutrición y progreso físico.',
      imageUrl: 'assets/banner.png',
      technologies: ['React Native', 'Redux', 'Firebase', 'GraphQL'],
      projectLink: 'https://example.com/fitness-tracker',
      githubLink: 'https://github.com/profayra/fitness-app',
    },
    {
      id: 8,
      name: 'Gestor de Proyectos Ágiles',
      description:
        'Herramienta para gestión de proyectos con metodologías ágiles, tableros Kanban y seguimiento de sprints.',
      imageUrl: 'assets/banner.png',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Docker'],
      projectLink: 'https://example.com/agile-manager',
      githubLink: 'https://github.com/profayra/agile-project-manager',
    },
  ];
}
