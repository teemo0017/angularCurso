import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title : string = 'VOY A LOGRARLO';
  public counter : number = 10;
  public count : number = 0;


  public incrementBy(value: number): void {
    this.counter += value;
    this.count += value;
  }

  public reset(){
    this.counter -= this.count;
    this.count = 0;
  }
}
