import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { TypeBadgeComponent } from '../type-badge/type-badge.component';

@Component({
  selector: 'app-type-page',
  standalone: true,
  imports: [CommonModule, TypeBadgeComponent, RouterModule],
  templateUrl: './type-page.component.html',
})
export class TypePageComponent implements OnInit {
  type: string = '';
  pokemonList: string[] = [];
  loading = true;
  typeList: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.type = params.get('type')!;
      this.fetchTypeData(this.type);
    });

    this.fetchAllTypes();
  }

  fetchAllTypes() {
    this.http.get<any>('https://pokeapi.co/api/v2/type').subscribe({
      next: (res) => {
        this.typeList = res.results.map((t: any) => t.name);
      },
      error: () => {
        this.typeList = [];
      },
    });
  }

  fetchTypeData(type: string) {
    this.loading = true;
    this.http.get<any>(`https://pokeapi.co/api/v2/type/${type}`).subscribe({
      next: (res) => {
        this.pokemonList = res.pokemon.map((p: any) => p.pokemon.name);
        this.loading = false;
      },
      error: () => {
        this.pokemonList = [];
        this.loading = false;
      },
    });
  }
}
