import { Component, inject, OnInit, signal } from '@angular/core';
import { CodeBlock } from '../../components/code-block/code-block';
import { RickMortyCharacter } from '../../interfaces/lesson.interface';
import { HttpDemoService } from '../../services/http-demo.service';

@Component({
  selector: 'app-http-client',
  imports: [CodeBlock],
  templateUrl: './http-client.html',
})
export class HttpClientView implements OnInit {
  private httpService = inject(HttpDemoService);

  public characters = signal<RickMortyCharacter[]>([]);
  public loading = signal<boolean>(false);
  public errorMsg = signal<string>('');

  public configCode: string = `// app.config.ts
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch())]
};`;

  public serviceCode: string = `// services/http-demo.service.ts
@Injectable({ providedIn: 'root' })
export class HttpDemoService {
  private http = inject(HttpClient);

  public getCharacters(): Observable<RickMortyResponse> {
    return this.http.get<RickMortyResponse>('https://rickandmortyapi.com/api/character');
  }
}`;

  public ngOnInit(): void {
    this.loadCharacters();
  }

  public loadCharacters(): void {
    this.loading.set(true);
    this.errorMsg.set('');

    this.httpService.getCharacters().subscribe({
      next: (res) => {
        this.characters.set(res.results.slice(0, 6));
        this.loading.set(false);
      },
      error: () => {
        this.errorMsg.set('No se pudo conectar con rickandmortyapi.com (revisa tu conexión a internet).');
        this.loading.set(false);
      },
    });
  }
}
