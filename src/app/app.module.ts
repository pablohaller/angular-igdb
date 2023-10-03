import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GamesListComponent } from './games-list/games-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GameCardComponent } from './game-card/game-card.component';
import { GameInformationComponent } from './game-information/game-information.component';
import { GameSearchComponent } from './game-search/game-search.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    GamesListComponent,
    GameCardComponent,
    GameInformationComponent,
    GameSearchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
