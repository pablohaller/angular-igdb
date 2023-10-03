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
  searchTerm: string = ''
  page: number = 1;
  total: number = 0;

  constructor(private _games: GamesService) { }
  ngOnInit() {
    this._games.getData(this.page).subscribe(res => {
      console.log('res', res)
      this.games = res;
      this.total = Math.round(this.games?.count);
      console.log('total', this.total / 20)
      this.page = 1
      this.loading = false
    })
  }

  setCurrentGame(selectedGame: Result) {
    console.log('setGame', selectedGame)
    this.currentGame = selectedGame;
  }

  clearCurrentGame() {
    this.currentGame = {
      id: -1,
    };
  }

  onSearchTermChange(event: any) {
    console.log('change', event)
  }

  onEnter(event: any) {
    if (event.key === "Enter") {
      this.loading = true
      this._games.getFilteredData(this.searchTerm, this.page).subscribe(res => {
        this.games = res;
        this.total = Math.round(this.games?.count);
        this.page = 1
        console.log('res', res)
        this.loading = false
      })
    }
  }

  getPage(page: number) {
    this.loading = true;
    console.log('dadasdasdasdasd', page)
    if (this.searchTerm.trim()) {
      this._games.getFilteredData(this.searchTerm, page).subscribe(res => {
        this.games = res;
        this.page = page;
        this.loading = false
      })
    } else {
      this._games.getData(page).subscribe(res => {
        this.games = res;
        this.page = page;
        this.loading = false
      })
    }
  }
}
