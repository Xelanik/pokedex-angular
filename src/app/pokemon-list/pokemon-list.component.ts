import {
  Component,
  OnInit,
  Output,
  Input,EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemonList = [];
  @Output() getData = new EventEmitter<{name: string}>();
  
  showFullInfo(data: {name: string}) {
    this.getData.emit(data)
    console.log(data)
  }

  constructor() {}

  ngOnInit() {}

}
