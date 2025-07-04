// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'player',
    loadComponent: () =>
      import('./components/player-dashboard.component').then(
        (m) => m.PlayerDashboardComponent,
      ),
  },
  {
    path: 'teams',
    loadComponent: () =>
      import('./components/team-history.component').then(
        (m) => m.TeamHistoryComponent,
      ),
  },
];
