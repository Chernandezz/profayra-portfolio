import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './website-service.component.html',
  styleUrls: ['./website-service.component.scss'],
})
export class WebsiteServiceComponent {
  basicFeatures = [
    'Up to 5 pages',
    'Responsive design',
    'Content management system',
    'Basic SEO setup',
    'Contact form',
    'Social media integration',
  ];

  standardFeatures = [
    'Up to 10 pages',
    'Custom design',
    'Advanced SEO optimization',
    'Content management system',
    'Blog/news section',
    'Google Analytics integration',
  ];

  premiumFeatures = [
    'Unlimited pages',
    'E-commerce functionality',
    'Payment gateway integration',
    'Custom features & functionality',
    'Advanced security',
    'Premium support',
  ];

  projects = [
    {
      name: 'Hospital Management System',
      description:
        'Complete system for managing patient records, appointments, and medical history',
      imageUrl: 'assets/projects/healthManagment.webp',
    },
    {
      name: 'Coffee Blog',
      description:
        'Tool for taking real-time notes with collaboration and advanced organization options.',
      imageUrl: 'assets/projects/blogDeCafe.webp',
    },
    // Puedes añadir más proyectos aquí
  ];
}
