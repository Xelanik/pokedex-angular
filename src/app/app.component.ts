import { Component } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})

export class AppComponent {
 constructor(private ps: PokemonService){}

 onClose(){
   this.ps.closeFullInfo()
 }
}