import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  imports: [],
  templateUrl: './new-component.html',
  styleUrl: './new-component.css',
})
export class NewComponent {
  public counter: number = 0;
  public onClickPlusOne(): void {
    this.counter++
  }
   public onClickMinusOne(): void {
    this.counter--
  }
}
