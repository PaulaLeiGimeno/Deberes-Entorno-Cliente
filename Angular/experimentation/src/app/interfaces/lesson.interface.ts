export interface TopicMeta {
  id: string;
  number: number;
  title: string;
  pdfName: string;
  summary: string;
  route: string;
}

export interface CodeExample {
  filename: string;
  language: string;
  code: string;
}

export interface FruitCardData {
  fruit: string;
  price: string;
  photo: string;
}

export interface RickMortyCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

export interface RickMortyResponse {
  info: {
    count: number;
    pages: number;
  };
  results: RickMortyCharacter[];
}
