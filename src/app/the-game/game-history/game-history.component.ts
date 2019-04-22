import {Component, OnInit, Input, ElementRef} from '@angular/core';
import {ModalService} from "../modals.service";

@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.scss']
})
export class GameHistoryComponent implements OnInit {

  @Input() showHistory:Array<object>;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    document.body.appendChild(this.element);
    this.modalService.add(this);
  }
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open-history');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}
