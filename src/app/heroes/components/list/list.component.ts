import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesList : string[] = ['Spiderman','AquaMan','Superman','Hulk','Flash'];
  public heroName? : string;


  removeSuperHero() : void {
    this.heroName = this.heroesList.pop();
    console.log(this.heroesList);
  }
}
