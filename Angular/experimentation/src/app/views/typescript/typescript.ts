import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodeBlock } from '../../components/code-block/code-block';

@Component({
  selector: 'app-typescript',
  imports: [FormsModule, CodeBlock],
  templateUrl: './typescript.html',
})
export class Typescript {
  public userName: string = 'Mundo';
  public unionValue: string | number = 12;

  public variablesCode: string = `let saludo: string;
saludo = 'hola';
// saludo = 12; // Error: debe ser string

let hola; // Sin valor inicial -> tipo 'any'
hola = 1;
hola = false;`;

  public functionsCode: string = `function myFunction(paramOne: number, paramTwo: string): void {
  // No devuelve nada ('void')
}

function check(state?: string) { // '?' indica parámetro opcional
  console.log(\`\${state || 'no está listo...'}\`);
}

function show(word = 'Mundo') { // Valor por defecto
  return \`Hola, \${word}!\`;
}`;

  public arraysCode: string = `let names: string[] = ['Dani', 'Ximo'];
let namesAlt: Array<string> = ['Dani', 'Ximo'];
let matrix: string[][] = [['Dani', 'Ximo'], ['Laura', 'Maria']];

// Tupla con varios tipos fijos:
let myArray: [string, number, string, boolean] = ['Roberto', 7, 'Albacete', false];

// Unión de tipos:
let id: string | number;
const mixed: (string | number)[] = [12, 'Jueves'];`;

  public greet(word?: string): string {
    const target = word && word.trim() ? word : 'Mundo';
    return `Hola, ${target}!`;
  }

  public setUnionAsNumber(): void {
    this.unionValue = 2026;
  }

  public setUnionAsString(): void {
    this.unionValue = 'Jueves';
  }
}
