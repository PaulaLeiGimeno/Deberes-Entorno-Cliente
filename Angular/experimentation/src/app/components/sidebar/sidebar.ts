import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TOPICS } from '../../data/topics.data';
import { TopicMeta } from '../../interfaces/lesson.interface';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  public topics: TopicMeta[] = TOPICS;
}
