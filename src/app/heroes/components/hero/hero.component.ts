import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public names_random : string[] = ['hulk','superman','marioBros','flash','batman'];
  public name: string = 'ironman';
  public age: number = 5;


  get capitalizedName() : string{
    return this.name.toUpperCase();
  }

  getHeroDescription() : string {
    return `${this.name} - ${this.age}`;
  }

  changeHero() : void {
    let random : number = Math.floor(Math.random()*this.names_random.length);
    this.name =  this.names_random[random];
  }

  changeAge() : void {
    this.age = Math.floor(Math.random() * 10);
  }

  reset(): void {
    this.name = 'iroman';
    this.age = 5;
  }

}
