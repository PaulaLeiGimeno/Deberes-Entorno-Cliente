import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-block',
  imports: [],
  templateUrl: './code-block.html',
  styleUrl: './code-block.css',
})
export class CodeBlock {
  @Input() filename: string = '';
  @Input() code: string = '';
}
