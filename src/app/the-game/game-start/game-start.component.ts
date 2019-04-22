import {Component, OnInit, EventEmitter, Output, Input, ElementRef} from '@angular/core';
import {ModalService} from "../modals.service";

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.scss']
})
export class GameStartComponent implements OnInit {

  @Output() argsEmmit: any = new EventEmitter<{playerName: string, gameNumber: number, checked: boolean}>();
  @Input()  switcher: boolean;
  @Input() id: string;
  private element: any;

  public playerName: string = 'Player';
  public gameNumber: number;
  public max:number = 10000;
  public min:number = 1;
  public checked:boolean = true;
  public errorNotice:string = '';
  public classError: string = '';

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    document.body.appendChild(this.element);
    this.modalService.add(this);
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
      this.element.style.display = 'none';
      document.body.classList.remove('modal-open');
    }else {
      this.errorNotice = "Please insert number";
      this.classError = 'invalid';
    }
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }
}
