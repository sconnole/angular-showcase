// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon/pikachu',
    pathMatch: 'full',
  },
  {
    path: 'pokemon/:name',
    loadComponent: () =>
      import('./components/pokemon-detail/pokemon-detail.component').then(
        (m) => m.PokemonDetailComponent,
      ),
  },
  {
    path: 'types/:type',
    loadComponent: () =>
      import('./components/type-page/type-page.component').then(
        (m) => m.TypePageComponent,
      ),
  },
];
