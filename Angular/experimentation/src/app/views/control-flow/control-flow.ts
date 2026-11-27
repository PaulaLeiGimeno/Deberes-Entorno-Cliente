import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodeBlock } from '../../components/code-block/code-block';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule, CodeBlock],
  templateUrl: './control-flow.html',
})
export class ControlFlow {
  public test: boolean = true;
  public selectedCase: string = 'one';
  public students: string[] = ['John', 'Mary', 'Rose', 'Charles'];
  public newStudent: string = '';

  public ifCode: string = `@if (test) {
  <p>Hello World!</p>
} @else {
  <p>Goodbye World!</p>
}`;

  public switchCode: string = `@switch (selectedCase) {
  @case ('one') { <p>Caso uno</p> }
  @case ('two') { <p>Caso dos</p> }
  @default { <p>Caso por defecto</p> }
}`;

  public forCode: string = `@for (student of students; track student; let i = $index; let first = $first; let last = $last) {
  <p>{{ i }} - {{ student }} (first: {{ first }}, last: {{ last }})</p>
} @empty {
  <p>Array vacío</p>
}`;

  public toggleTest(): void {
    this.test = !this.test;
  }

  public addStudent(): void {
    const trimmed = this.newStudent.trim();
    if (trimmed && !this.students.includes(trimmed)) {
      this.students.push(trimmed);
      this.newStudent = '';
    }
  }

  public clearStudents(): void {
    this.students = [];
  }

  public resetStudents(): void {
    this.students = ['John', 'Mary', 'Rose', 'Charles'];
  }
}
