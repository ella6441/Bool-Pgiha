import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BoolScore } from '../bool-score/bool-score';
import { BoolBoard } from '../bool-board/bool-board';

@Component({
  selector: 'app-bool-select-color',
  imports: [],
  templateUrl: './bool-select-color.html',
  styleUrl: './bool-select-color.scss'
})
export class BoolSelectColor {

  @Input()
  colorsOptions: string[] = []

  index: number = 0;
  arrChoose: string[] = ["", "", "", ""]

  @Output()
  arrSendColor: EventEmitter<string[]> = new EventEmitter<string[]>


  selectColor(color: string) {
    if (this.index < 4) {
      this.arrChoose[this.index] = color

      this.index++
      this.arrSendColor.emit(this.arrChoose)
    }
    if (this.index == 4) {
      this.arrChoose = ["", "", "", ""]
      this.index=0
    }
  }

}
