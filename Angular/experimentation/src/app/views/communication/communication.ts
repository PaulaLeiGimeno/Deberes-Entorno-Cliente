import { Component } from '@angular/core';
import { CodeBlock } from '../../components/code-block/code-block';
import { DemoCard } from '../../components/demo-card/demo-card';
import { FruitCardData } from '../../interfaces/lesson.interface';

@Component({
  selector: 'app-communication',
  imports: [CodeBlock, DemoCard],
  templateUrl: './communication.html',
})
export class Communication {
  public fruits: FruitCardData[] = [
    { fruit: 'Fresas', price: '2,85', photo: '🍓' },
    { fruit: 'Plátanos', price: '1,95', photo: '🍌' },
    { fruit: 'Naranjas', price: '1,60', photo: '🍊' },
  ];

  public lastEventMessage: string = 'Haz click en el nombre de una fruta para emitir @Output() al padre...';

  public inputCode: string = `// Componente Hijo (card.ts)
@Input() photo: string = '';
@Input() fruit: string = '';
@Input() price: string = '';

// Componente Padre (view-one.html)
<app-card [photo]="photo" [fruit]="fruit" [price]="price"></app-card>`;

  public outputCode: string = `// Componente Hijo (card.ts)
@Output() message = new EventEmitter<string>();

public onClick(): void {
  this.message.emit('String enviado...');
}

// Componente Padre (view-one.html)
<app-card (message)="onMessageReceived($event)"></app-card>`;

  public onMessageReceived(msg: string): void {
    this.lastEventMessage = msg;
  }
}
