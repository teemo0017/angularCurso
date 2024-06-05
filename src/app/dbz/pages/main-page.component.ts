import { Component} from '@angular/core';
import { character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class mainPageComponent {

  constructor( private dbzService : dbzService){

  }

  get listCharacters() : character[] {
    return [...this.dbzService.chracterList]
  }

  onDeleteCharacterById(id : string) :void{
    this.dbzService.onDeleteCharacterById(id);
  }

  onNewCharacter(character :character) : void{
    this.dbzService.addNewCharacter(character);
  }


}
