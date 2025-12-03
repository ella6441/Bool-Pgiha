import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bool-score',
  imports: [FormsModule],
  templateUrl: './bool-score.html',
  styleUrl: './bool-score.scss'
})
export class BoolScore {
  @Input()
  mat: string[][] = [];
  @Input()
  boolim: number[] = []
  @Input()
  pgiot: number[] = []
  index: number = 0;



  win() {
    alert("you wonnnnnnnnnnnnnnnnnnnnnnn😊😊😊😊😊😊😊😊")
  }

}

