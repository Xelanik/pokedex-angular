import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})

export class PokemonComponent implements OnInit {
  @Input() pokemon: {name: string};
  @Output() getFullInfo = new EventEmitter<{name: string}>();

  onPokemonSelect() {
    this.getFullInfo.emit({name: this.pokemon.name})
  }

  constructor() { }

  ngOnInit() {
  }

}
