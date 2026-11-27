import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CodeBlock } from '../../components/code-block/code-block';

@Component({
  selector: 'app-routing',
  imports: [RouterLink, CodeBlock],
  templateUrl: './routing.html',
})
export class Routing {
  public routesCode: string = `import { Routes } from '@angular/router';
import { View1 } from './views/view1/view1';
import { View2 } from './views/view2/view2';

export const routes: Routes = [
  { path: '', redirectTo: 'view1', pathMatch: 'full' },
  { path: 'view1', component: View1 },
  { path: 'view2', component: View2 },
];`;

  public outletCode: string = `<app-sidebar></app-sidebar>
<main class="content">
  <router-outlet></router-outlet> <!-- Aquí se carga cada vista -->
</main>`;

  public linkCode: string = `import { RouterLink, RouterLinkActive } from '@angular/router';

// En HTML:
<a routerLink="/events" routerLinkActive="active">Eventos</a>`;
}
