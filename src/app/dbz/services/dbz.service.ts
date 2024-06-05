import { character } from './../interfaces/character.interface';
import {v4 as uuid} from 'uuid'
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class dbzService {

  public chracterList : character[] = [
    {
      id : uuid(),
      name : 'krillin',
      power : 1000
    },
    {
       id : uuid(),
      name : 'Goku',
      power : 9000
    },
    {
       id : uuid(),
      name : 'Vegetta',
      power : 7500
    },
    {
       id : uuid(),
      name : 'Freezer',
      power : 10300
    }

  ];

  addNewCharacter(character : character){

    const newCharacter : character = {
      id : uuid(),
      ...character
    };
    this.chracterList.push(newCharacter);
  }

  // onDeleteCharacter(index : number){
  //   this.chracterList.splice(index,1);
  // }

  onDeleteCharacterById(id: string){
    this.chracterList = this.chracterList.filter(character => character.id !== id);
  }

}
