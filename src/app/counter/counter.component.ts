import { Component } from "@angular/core";



@Component({
  templateUrl : `./counter.component.html`,
  selector: 'counter-component'

})
export class counterComponent{


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
