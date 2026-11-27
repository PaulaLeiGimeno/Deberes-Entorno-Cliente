import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TOPICS } from '../../data/topics.data';
import { TopicMeta } from '../../interfaces/lesson.interface';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class Home {
  public topics: TopicMeta[] = TOPICS;
}
