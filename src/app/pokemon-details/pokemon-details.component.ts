import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})

export class PokemonDetailsComponent implements OnInit {
  @Input() pokemonDetails: {name: string};
  
  constructor() { }

  ngOnInit() {
    console.log(this.pokemonDetails)
  }

}
