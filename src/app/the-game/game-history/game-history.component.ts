import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.scss']
})
export class GameHistoryComponent implements OnInit {

  @Input() showHistory:Array<object>;
  @Input() show:boolean;

  constructor() { }

  ngOnInit() {

    this.show = true;
  }
  closModal(){
    this.show = true;
  };
}
