import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TypeBadgeComponent } from '../type-badge/type-badge.component';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, TypeBadgeComponent],
  templateUrl: './pokemon-detail.component.html',
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const name = params.get('name')!;
      this.fetchPokemon(name);
    });
  }

  fetchPokemon(name: string) {
    this.loading = true;
    this.error = '';
    this.pokemon = null;

    this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`).subscribe({
      next: (data) => {
        this.pokemon = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Pokémon not found.';
        this.loading = false;
      },
    });
  }
}
