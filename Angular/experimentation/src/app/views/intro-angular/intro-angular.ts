import { Component } from '@angular/core';
import { CodeBlock } from '../../components/code-block/code-block';

@Component({
  selector: 'app-intro-angular',
  imports: [CodeBlock],
  templateUrl: './intro-angular.html',
})
export class IntroAngular {
  public selectedFile: string = 'main.ts';

  public projectFiles: { name: string; desc: string }[] = [
    { name: 'main.ts', desc: 'Punto de entrada a Angular. Arranca la aplicación con App y appConfig.' },
    { name: 'index.html', desc: 'Punto de entrada HTML donde se renderiza toda la aplicación (<app-root>).' },
    { name: 'app.ts', desc: 'Clase TypeScript del componente raíz. Aquí se importan otros componentes.' },
    { name: 'app.html', desc: 'Plantilla HTML del componente raíz donde instanciamos los componentes.' },
    { name: 'styles.css', desc: 'Estilos globales de toda la aplicación.' },
  ];

  public cliCommands: string = `npm install -g @angular/cli   # Instalar Angular CLI
ng new my-app                 # Crear un nuevo proyecto
ng serve                      # Lanzar el servidor de desarrollo
ng build                      # Compilar para producción
ng generate component components/header  # Crear un componente`;

  public componentCode: string = `import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header { }`;

  public get selectedDescription(): string {
    return this.projectFiles.find((f) => f.name === this.selectedFile)?.desc ?? '';
  }
}
