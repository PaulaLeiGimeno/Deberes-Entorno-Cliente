import { Component } from '@angular/core';
import { CodeBlock } from '../../components/code-block/code-block';

interface ArticleExample {
  miniTitle: string;
  title: string;
  paragraph: string[];
  link?: string;
}

@Component({
  selector: 'app-interfaces',
  imports: [CodeBlock],
  templateUrl: './interfaces.html',
})
export class Interfaces {
  public showOptionalLink: boolean = false;

  public article: ArticleExample = {
    miniTitle: 'Lorem',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    paragraph: ['Primer párrafo tipado con string[]', 'Segundo párrafo del artículo'],
  };

  public interfaceCode: string = `// article.interface.ts (el nombre empieza con mayúscula)
export interface Article {
  image: string;
  miniTitle: string;
  title: string;
  paragraph: string[];
  link?: string; // '?' indica propiedad opcional
}`;

  public usageCode: string = `const contents: Article = {
  image: "https://...",
  miniTitle: "Lorem",
  title: "Lorem ipsum dolor sit amet...",
  paragraph: ["Párrafo 1"]
  // 'link' es opcional, podemos omitirlo
};`;

  public toggleLink(): void {
    this.showOptionalLink = !this.showOptionalLink;
    if (this.showOptionalLink) {
      this.article = { ...this.article, link: 'https://angular.dev' };
    } else {
      const { link: _, ...rest } = this.article;
      this.article = rest;
    }
  }
}
