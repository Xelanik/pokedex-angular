import {
  HttpClient
} from '@angular/common/http';

import {
  Injectable
} from '@angular/core';

const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=12'
@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor(private http: HttpClient) {}

  nextLink: string;
  pokemonList = [];
  pokemonFullInfo = {};

  getPokemons(url = URL) {
    this.http
      .get(url)
      .subscribe(
        (resp: any) => {
          console.log(resp)
          this.pokemonList.push(...resp.results)
          this.nextLink = resp.next
        },
        err => console.log(err),
        () => console.log(this.pokemonList)
      );
  };

  getPokemonInfo(url: string) {
   return this.http.get(url)
  }

  getFullInfo( pokemon: object ){
    console.log(pokemon)
    this.pokemonFullInfo = pokemon
  }

  loadMorePokemons(){
    this.getPokemons(this.nextLink)
  }

  closeFullInfo(){
    this.pokemonFullInfo = {}
  }
}
