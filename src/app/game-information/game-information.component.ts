import { Component, Input } from '@angular/core';
import { Result } from 'src/contract';

@Component({
  selector: 'app-game-information',
  templateUrl: './game-information.component.html',
  styleUrls: ['./game-information.component.css']
})
export class GameInformationComponent {
  @Input() currentGame: Result | null = null;
  @Input() onClose: (() => void) | null = null;
}
