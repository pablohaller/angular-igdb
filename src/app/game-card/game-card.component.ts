import { Component, Input } from '@angular/core';
import { Result } from 'src/contract';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  @Input() game: Result | null = null;
  constructor() { }
}
