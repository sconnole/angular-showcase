import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent, PokemonSearchComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-showcase';
  toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
  }
}
