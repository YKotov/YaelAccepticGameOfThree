import {Component, OnInit, EventEmitter, Output, ElementRef} from '@angular/core';
import {ModalService} from "../modals.service";

@Component({
  selector: 'app-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.scss']
})
export class GameControlsComponent implements OnInit {

  @Output() step: any = new EventEmitter<{action: number, checked: boolean}>();
  @Output() restart: any = new EventEmitter<boolean>();

  constructor(private modalService: ModalService) {
  }

  ngOnInit(){};

  gameStep(step,bool){
    this.step.emit({step,bool});
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  cleanLog(e){
    this.restart.emit(e);
  }

}
