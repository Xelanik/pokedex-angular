import { Component, OnInit, Input} from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})

export class PokemonComponent implements OnInit {
  @Input() pokemon: {name: string, url: string};

  constructor(private pokeService: PokemonService) { }

  dataLoaded: boolean = false;
  pokemonInfo: {name: string, types: any};
  pokemonTypes = [];

  ngOnInit() {
    this.pokeService.getPokemonInfo(this.pokemon.url)
      .subscribe( 
        (resp:any) => this.pokemonInfo = resp,
        err => console.log(err),
        () => {
          this.pokemonTypes = this.pokemonInfo.types.reverse();
          console.log(this.pokemonTypes)
        }
      );
  }

  loaded() {
    this.dataLoaded = true
  }

  onClick() {
    this.pokeService.getFullInfo(this.pokemonInfo);
  }
}
