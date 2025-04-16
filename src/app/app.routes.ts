import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { WebsiteServiceComponent } from './pages/website-service/website-service.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'websiteservice', component: WebsiteServiceComponent },

  { path: '**', redirectTo: '' },
];
