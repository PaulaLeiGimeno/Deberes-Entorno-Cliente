import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-demo-card',
  imports: [],
  templateUrl: './demo-card.html',
  styleUrl: './demo-card.css',
})
export class DemoCard {
  @Input() photo: string = '';
  @Input() fruit: string = '';
  @Input() price: string = '';

  @Output() message = new EventEmitter<string>();

  public onClick(): void {
    this.message.emit(`Has hecho click en "${this.fruit}" (${this.price} €/kg)`);
  }
}
