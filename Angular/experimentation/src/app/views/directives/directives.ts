import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { CodeBlock } from '../../components/code-block/code-block';

@Component({
  selector: 'app-directives',
  imports: [NgClass, NgStyle, CodeBlock],
  templateUrl: './directives.html',
})
export class Directives {
  public test: boolean = false;
  public bgColor: string = '#fef08a';
  public fontSize: number = 18;

  public ngClassCode: string = `import { NgClass } from '@angular/common';
// En @Component({ imports: [NgClass] })

// En HTML:
<p [ngClass]="test ? 'red' : 'green'">Hello World</p>`;

  public ngStyleCode: string = `import { NgStyle } from '@angular/common';
// En @Component({ imports: [NgStyle] })

// En HTML:
<h1 [ngStyle]="{'background': bgColor, 'font-size.px': fontSize}">Hello World</h1>`;
}
