import { Component } from '@angular/core';
import { Article } from './article/article';
import { Menu } from './menu/menu';

@Component({
  selector: 'app-main',
  imports: [Article, Menu],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main { }
