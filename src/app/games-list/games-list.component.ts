import { Component, Input, SimpleChanges } from '@angular/core';
import { GamesService } from '../games.service';
import { Result, Root } from 'src/contract';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent {
  games: Root | any = {}
  currentGame: Result | any = {}
  loading = true
  searchTerm: string = 'el search'

  constructor(private _games: GamesService) { }
  ngOnInit() {
    this._games.getData().subscribe(res => {
      this.games = res;
      console.log('res', res)
      this.loading = false
    })
  }

  setCurrentGame(selectedGame: Result) {
    console.log('setGame', selectedGame)
    this.currentGame = selectedGame;
  }

  clearCurrentGame() {
    this.currentGame = {};
  }

  onSearchTermChange(event: any) {
    console.log('change', event)
  }

  onEnter(event: any) {
    if (event.key === "Enter") {
      this.loading = true
      this._games.getFilteredData(this.searchTerm).subscribe(res => {
        this.games = res;
        console.log('res', res)
        this.loading = false
      })
    }
  }
}
