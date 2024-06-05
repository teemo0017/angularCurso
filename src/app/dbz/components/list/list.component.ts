import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  @Output()
  //send info to father
 public onDeleteId : EventEmitter<string> = new EventEmitter();

   @Input()
  public characterList : character[] = [
    {
      name : 'Trunks',
      power : 100,
      id : ''
    }
  ]

  onDeleteCharacter(index ?: string){

    if(!index) return ;
    this.onDeleteId.emit(index);
  }
}
