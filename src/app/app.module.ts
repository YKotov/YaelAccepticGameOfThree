import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { TheGameComponent } from './the-game/the-game.component';
import { GameLogComponent } from './the-game/game-log/game-log.component';
import { GameControlsComponent } from './the-game/game-controls/game-controls.component';
import { GameStartComponent } from './the-game/game-start/game-start.component';
import { GameHistoryComponent } from './the-game/game-history/game-history.component';
import { GamePlayersComponent } from './the-game/game-players/game-players.component';
import {FormsModule} from "@angular/forms";
import {ModalService} from "./the-game/modals.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TheGameComponent,
    GameLogComponent,
    GameControlsComponent,
    GameStartComponent,
    GameHistoryComponent,
    GamePlayersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
