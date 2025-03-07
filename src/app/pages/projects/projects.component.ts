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
      name: 'Cafena',
      description:
        'Servicio RESTful para transformación y análisis de grandes volúmenes de datos con autenticación OAuth.',
      imageUrl: 'assets/projects/cafena.png',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
      projectLink: 'https://coffe-shop-ch.netlify.app/',
      githubLink: '',
    },
    {
      id: 2,
      name: 'Copa America USA 2024',
      description:
        'Panel de administración completo para tiendas online con análisis de ventas y gestión de inventario.',
      imageUrl: 'assets/projects/copaAmerica.png',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      projectLink: 'https://thunderous-granita-9d371d.netlify.app/',
      githubLink: '',
    },
    {
      id: 3,
      name: 'Lollapalooza',
      description:
        'Aplicación para seguimiento de gastos, presupuestos y visualización de hábitos financieros personales.',
      imageUrl: 'assets/projects/lollapalooza.png',
      technologies: ['React', 'Firebase', 'Chart.js', 'Material UI'],
      projectLink: 'https://serene-daifuku-9ef7b4.netlify.app/',
      githubLink: '',
    },
    {
      id: 4,
      name: 'Blog de café',
      description:
        'Herramienta para tomar notas en tiempo real con opciones de colaboración y organización avanzada.',
      imageUrl: 'assets/projects/blogDeCafe.png',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      projectLink: 'https://blogdecafe-ch.netlify.app/',
      githubLink: '',
    },
    {
      id: 5,
      name: 'Algoritmo genético en la web',
      description:
        'Plataforma para administración de cursos, estudiantes y calificaciones con módulos de comunicación.',
      imageUrl: 'assets/projects/geneticAlgorithm.png',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
      projectLink: 'https://algoritmogeneticounal.netlify.app/genetico',
      githubLink: 'https://github.com/profayra/education-management',
    },
    {
      id: 6,
      name: 'The movieauro',
      description:
        'Sistema para organización y gestión de conferencias virtuales con salas interactivas y networking.',
      imageUrl: 'assets/projects/theMovieauro.png',
      technologies: ['Angular', 'WebRTC', 'Node.js', 'Firebase'],
      projectLink: 'https://trabajo-final-kekh.vercel.app/',
      githubLink: 'https://github.com/profayra/virtual-events-platform',
    },
    {
      id: 7,
      name: 'Rock EDM festival',
      description:
        'Aplicación móvil para seguimiento de entrenamientos, nutrición y progreso físico.',
      imageUrl: 'assets/projects/rockFestival.png',
      technologies: ['React Native', 'Redux', 'Firebase', 'GraphQL'],
      projectLink: 'https://glittering-moonbeam-4893f4.netlify.app/',
      githubLink: 'https://github.com/profayra/fitness-app',
    },
    {
      id: 8,
      name: 'Otros proyectos',
      description:
        'Herramienta para gestión de proyectos con metodologías ágiles, tableros Kanban y seguimiento de sprints.',
      imageUrl: 'assets/projects/github.png',
      technologies: [],
      projectLink: '',
      githubLink: 'https://github.com/Chernandezz?tab=repositories',
    },
  ];
}
