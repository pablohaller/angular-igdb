import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor(private _http: HttpClient) { }
  getData() {
    // return this._http.get(`https://api.rawg.io/api/platforms?key=${process.env[RAWG_IO_API_KEY!]}`)
    return this._http.get(`https://api.rawg.io/api/games?key=0d39230ba7284181abe4200e10bb613d`)
  }
  getFilteredData(search: string) {
    const searchParam = encodeURIComponent(search);
    return this._http.get(`https://api.rawg.io/api/games?key=0d39230ba7284181abe4200e10bb613d&search=${searchParam}`)
  }
}
