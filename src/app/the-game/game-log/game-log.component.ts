import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-log',
  templateUrl: './game-log.component.html',
  styleUrls: ['./game-log.component.scss']
})
export class GameLogComponent implements OnInit {

  @Input() start:number;
  @Input() log:Array<object>;
  @Input() actionResult:number;
  @Input() congratulation:string;

  constructor() { }

  ngOnInit() {
  }
}
