import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pokemon-search.component.html',
})
export class PokemonSearchComponent {
  query = '';

  constructor(private router: Router) {}

  onSearch() {
    const trimmed = this.query.trim().toLowerCase();
    if (trimmed) {
      this.router.navigate(['/pokemon', trimmed]);
      this.query = '';
    }
  }
}
