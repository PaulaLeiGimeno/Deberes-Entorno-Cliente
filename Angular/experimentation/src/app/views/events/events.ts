import { Component } from '@angular/core';
import { CodeBlock } from '../../components/code-block/code-block';

@Component({
  selector: 'app-events',
  imports: [CodeBlock],
  templateUrl: './events.html',
})
export class Events {
  public clickCount: number = 0;
  public hoverColor: string = '#1e293b';
  public lastInputValue: string = '';

  public htmlCode: string = `<header (click)="onClick()">Hello World!</header>
<header (mouseover)="onMouseOver($event)">Pasa el ratón</header>`;

  public tsCode: string = `export class Header {
  public onClick(): void {
    alert('Hello World');
  }

  public onMouseOver(event: MouseEvent): void {
    const text = <HTMLElement>event.target;
    text.style.color = 'yellow';
  }
}`;

  public onClick(): void {
    this.clickCount++;
  }

  public onMouseOver(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    this.hoverColor = '#dd0031';
    target.style.borderColor = '#dd0031';
  }

  public onMouseLeave(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    this.hoverColor = '#1e293b';
    target.style.borderColor = '#cbd5e1';
  }

  public handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.lastInputValue = input.value;
  }
}
