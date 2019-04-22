import {Component} from '@angular/core';
import {isObject} from "util";
import {ModalService} from "./modals.service";

@Component({
  selector: 'app-the-game',
  templateUrl: './the-game.component.html',
  styleUrls: ['./the-game.component.scss']
})
export class TheGameComponent {

  public name: string = 'Player';
  public gameStartInt: number;
  public actionResult: number;
  public log: Array<object> = [];
  public checked: boolean;
  private comp: boolean = this.checked;
  private compStep: Array<number> = [-1, 0, 1];
  private aRestart:number;

  constructor(private modalService: ModalService) {
    this.name = 'Player'
  }

  getStartOptions(props) {
    this.name = props.playerName;
    this.gameStartInt = props.gameNumber;
    this.comp = props.checked;

    this.aRestart = props.gameNumber;

    if (!this.comp) {
      this.compTurn();
    }
  }


  static storeWinnerInLocal(name, onMove) {
    let winner = JSON.parse(localStorage.getItem('winner '));
    if (winner == null) {
      winner = [];
    }
    console.log(winner);

    let winnerObj = {
      'winner': name,
      'onMove': onMove
    };

    winner.push(winnerObj);

    localStorage.setItem('winner', JSON.stringify(winner));
  }

  gameStep(props, name) {
    this.actionResult = !isNaN(this.actionResult) ? this.actionResult : this.gameStartInt;
    let propsActual = isObject(props) ? props.step : props;

    if (this.actionResult > 1 && (this.actionResult + propsActual) % 3 !== 0) {

      if (props.bool) {
        this.compTurn();
      }
      //log fail step
      let logObj = {name: name, action: propsActual, result: this.actionResult, game: true};
      this.log.push(logObj);
      return false;
    } else if (this.actionResult > 1) {
      this.actionResult = (this.actionResult + propsActual) / 3;

      if (this.actionResult !== 1) {
        //log success step
        if (props.bool) {
          this.compTurn();
        }
        let logObj = {name: name, action: propsActual, result: this.actionResult, game: true};
        this.log.push(logObj);
        return false;
      } else {
        //log winner
        let logObj = {name: name, game: false};
        this.log.push(logObj);

        //Save into local storage
        TheGameComponent.storeWinnerInLocal(name, this.log.length);

        return false;
      }
    }
  }

  compTurn() {
    setTimeout(() => {
      let step = this.compStep[Math.floor(Math.random() * this.compStep.length)];
      this.gameStep(step, 'Comp');
      return false;
    }, 400);
  }

  restart(e){
    //Hack :(
    location.href = '';
  }
}
