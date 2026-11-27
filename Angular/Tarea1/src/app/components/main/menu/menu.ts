import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  public isDisplaying: boolean = false

  public onClick(event: MouseEvent): void {
    this.isDisplaying = !this.isDisplaying;

  }
}
