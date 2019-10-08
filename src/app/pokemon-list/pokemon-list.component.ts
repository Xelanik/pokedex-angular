import {Component, OnInit} from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})

export class PokemonListComponent implements OnInit {
  pokemons: { name: string, url: string}[] = [];

  constructor(public ps: PokemonService) {}

  ngOnInit() {
    this.ps.getPokemons()
  }

}
