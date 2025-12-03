// import { Component, Input } from '@angular/core';
import { BoolBoard } from '../bool-board/bool-board';
import { BoolScore } from '../bool-score/bool-score';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, output, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bool-select-color',
  imports: [FormsModule],
  templateUrl: './bool-select-color.html',
  styleUrl: './bool-select-color.scss'
})
export class BoolSelectColor {
  index: number = 0;
  arrChoose: string[] = ["lightgray", "lightgray", "lightgray", "lightgray"]
  @Input()
  colorsOpt: string[] = []


  @Output()
  arrChooseColor: EventEmitter<string[]> = new EventEmitter<string[]>

  constructor() {
    console.log(this.colorsOpt);
  }
  selectColor(color: string) {
    if (this.index < 4) {
      this.arrChoose[this.index] = color
      this.index++;

    }
    this.arrChooseColor.emit(this.arrChoose)
    if (this.index == 4)
    {
      this.arrChoose = ["lightgray", "lightgray", "lightgray", "lightgray"]
      this.index = 0;
    }
  }

}
