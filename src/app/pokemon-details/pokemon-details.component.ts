import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})

export class PokemonDetailsComponent implements OnInit {  

  constructor(private ps: PokemonService) {}

  pokemon = this.ps.pokemonFullInfo;
  
  ngOnInit() {    
  }
}
