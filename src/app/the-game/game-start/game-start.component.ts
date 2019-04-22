import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.scss']
})
export class GameStartComponent implements OnInit {

  @Output() argsEmmit: any = new EventEmitter<{playerName: string, gameNumber: number, checked: boolean}>();
  @Input()  switcher: boolean;

  public playerName: string = 'Player';
  public gameNumber: number;
  public max:number = 10000;
  public min:number = 1;
  public checked:boolean = true;
  public errorNotice:string = '';
  public classError: string = '';

  constructor() { }

  ngOnInit() {
  }

  random(){
    this.gameNumber = Math.floor(( Math.random () * (this.max - this.min + 1)) + this.min);
  }

  start(playerName,gameNumber,checked){
    if(gameNumber > 3){
      this.argsEmmit.emit({playerName,gameNumber,checked});
    }
  }

  closeConfiguration(){
    if(this.gameNumber > 3) {
      this.switcher = true;
    }else {
      this.errorNotice = "Please insert number";
      this.classError = 'invalid';
    }
  }

}
