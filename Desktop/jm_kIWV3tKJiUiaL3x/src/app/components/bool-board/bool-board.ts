import { Component } from '@angular/core';
import { BoolSelectColor } from '../bool-select-color/bool-select-color';
import { BoolScore } from '../bool-score/bool-score';

@Component({
  selector: 'app-bool-board',
  imports: [BoolSelectColor, BoolScore],
  templateUrl: './bool-board.html',
  styleUrl: './bool-board.scss'
})
export class BoolBoard {

  colorsOptions: string[] = ["red", "blue", "pink", "green", "orange", "yellow"]
  board: string[][] = []
  goal: string[] = []
  monim: boolean[] = [false, false, false, false, false, false]
  line: number = 0;
  bool: number = 0;
  pgiha: number = 0;
  boolim: number[] = [0, 0, 0, 0, 0, 0, 0, 0]
  pgiot: number[] = [0, 0, 0, 0, 0, 0, 0, 0]

  constructor() {
    this.board = Array(8).fill(Array<string>(4).fill("lightgray"))
    this.fillGoal()
    console.log(this.goal);

  }

  fillGoal() {
    for (let index = 0; index < 4; index++) {
      let rand = Math.floor(Math.random() * 6)
      if (this.monim[rand] == false) {
        this.monim[rand] = true
        this.goal.push(this.colorsOptions[rand])
      }
      else {
        index--;
      }
    }
  }
  setAddColor(arrColor: string[]) {
    if (this.line == 8) {
      alert("you lose😭😭😭😭😭😭😭😭😭😭")
      return

    }

    this.board[this.line] = arrColor
    // console.log(this.board[this.line]);


    if (arrColor[arrColor.length - 1] != "lightgray") {
      this.check(arrColor)
      this.line++;





    }
  }
  check(arrColor: string[]) {
    for (let index = 0; index < 4; index++) {
      if (arrColor.includes(this.goal[index]) && arrColor[index] != this.goal[index])
        this.pgiha++;
      else {
        if (arrColor.includes(this.goal[index]) && arrColor[index] == this.goal[index])
          this.bool++;
      }
    }
    this.boolim[this.line] = this.bool
    this.pgiot[this.line] = this.pgiha
    this.bool = 0;
    this.pgiha = 0;
    console.log("bool" + this.boolim);
    console.log("pgiha" + this.pgiot);



  }
}
