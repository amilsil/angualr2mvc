import { provideRouter, RouterConfig }  from '@angular/router';
import { DocumentationComponent } from './components/documentation.component';
import { AboutComponent } from './components/about.component';

const routes: RouterConfig = [
  {
    path: 'documentation',
    component: DocumentationComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: AboutComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
