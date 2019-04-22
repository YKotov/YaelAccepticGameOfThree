import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.scss']
})
export class GameControlsComponent implements OnInit {

  @Output() step: any = new EventEmitter<{action: number, checked: boolean}>();
  @Output() restartEmmit: any = new EventEmitter<any>();
  @Output() showTopEmmit: any = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  gameStep(step,bool){
    this.step.emit({step,bool});
  }

  restart(e){
    this.restartEmmit.emit(e);
  }

  showTop(e){
    this.showTopEmmit.emit(false);
  }
}
