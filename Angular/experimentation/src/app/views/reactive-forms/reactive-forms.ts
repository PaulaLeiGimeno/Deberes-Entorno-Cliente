import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CodeBlock } from '../../components/code-block/code-block';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, JsonPipe, CodeBlock],
  templateUrl: './reactive-forms.html',
})
export class ReactiveForms {
  public reactiveForm = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    age: new FormControl('', { nonNullable: true }),
  });

  public submittedData: { name: string; email: string; age: string } | null = null;

  public tsCode: string = `reactiveForm = new FormGroup({
  name: new FormControl('', { nonNullable: true }),
  email: new FormControl('', { nonNullable: true }),
  age: new FormControl('', { nonNullable: true }),
});

public onSubmit(): void {
  const data = this.reactiveForm.getRawValue();
  console.log(data);
  this.reactiveForm.reset();
}`;

  public htmlCode: string = `<form (ngSubmit)="onSubmit()" [formGroup]="reactiveForm">
  <input type="text" placeholder="Nombre" formControlName="name">
  <input type="text" placeholder="Edad" formControlName="age">
  <input type="text" placeholder="e-mail" formControlName="email">
  <button type="submit">MOSTRAR</button>
</form>`;

  public onSubmit(): void {
    this.submittedData = this.reactiveForm.getRawValue();
    this.reactiveForm.reset();
  }
}
