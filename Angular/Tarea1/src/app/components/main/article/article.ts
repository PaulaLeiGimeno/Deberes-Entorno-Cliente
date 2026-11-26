import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article {
  public image1: string = 'https://www.visitvalencia.com/sites/default/files/media/media-images/images/CIUDAD_ARTES_CIENCIAS_VALENCIA%20_3__1024_0.jpg'
  public image2: string = 'https://st3.idealista.com/news/archivos/styles/amp_1200x675_16_9/public/2024-08/images/valencia-1049389_1280_1.jpg?VersionId=eJYajNumRq_YA1kM5lE3zeQi1JB.ICMZ&itok=BD_JhLvj'


  public onMouseOverImage(event: MouseEvent): void {
    (<HTMLElement>event.currentTarget).style.backgroundImage = `url('${this.image1}')`
  }

  public onMouseOutImage(event: MouseEvent): void {
    (<HTMLElement>event.currentTarget).style.backgroundImage = `url('${this.image2}')`
  }

  public onMouseOverText(event: MouseEvent): void {
    (<HTMLElement>event.currentTarget).style.color = 'red'
  }
  public onMouseOutText(event: MouseEvent): void {
    (<HTMLElement>event.currentTarget).style.color = 'black'
  }

}
