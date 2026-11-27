import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { IntroAngular } from './views/intro-angular/intro-angular';
import { Typescript } from './views/typescript/typescript';
import { Events } from './views/events/events';
import { ControlFlow } from './views/control-flow/control-flow';
import { Directives } from './views/directives/directives';
import { Routing } from './views/routing/routing';
import { Communication } from './views/communication/communication';
import { Interfaces } from './views/interfaces/interfaces';
import { HttpClientView } from './views/http-client/http-client';
import { ReactiveForms } from './views/reactive-forms/reactive-forms';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'intro-angular', component: IntroAngular },
  { path: 'typescript', component: Typescript },
  { path: 'events', component: Events },
  { path: 'control-flow', component: ControlFlow },
  { path: 'directives', component: Directives },
  { path: 'routing', component: Routing },
  { path: 'communication', component: Communication },
  { path: 'interfaces', component: Interfaces },
  { path: 'http-client', component: HttpClientView },
  { path: 'reactive-forms', component: ReactiveForms },
  { path: '**', redirectTo: '' },
];
