import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-type-badge',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './type-badge.component.html',
})
export class TypeBadgeComponent {
  @Input() type!: string;

  getColor(): string {
    const colors: Record<string, string> = {
      fire: 'bg-red-500',
      water: 'bg-blue-500',
      grass: 'bg-green-500',
      electric: 'bg-yellow-400 text-black',
      psychic: 'bg-pink-500',
      ice: 'bg-cyan-300 text-black',
      dragon: 'bg-purple-600',
      dark: 'bg-gray-800',
      fairy: 'bg-pink-300 text-black',
      normal: 'bg-gray-400 text-black',
      flying: 'bg-sky-300 text-black',
      fighting: 'bg-orange-600',
      poison: 'bg-purple-400',
      ground: 'bg-yellow-700',
      rock: 'bg-stone-500',
      bug: 'bg-lime-500 text-black',
      ghost: 'bg-indigo-800',
      steel: 'bg-gray-500',
    };

    return colors[this.type] || 'bg-gray-500';
  }
}
