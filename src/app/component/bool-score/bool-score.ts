import { Component, Input } from '@angular/core';
// import { BoolBoard } from '../bool-board/bool-board';

@Component({
  selector: 'app-bool-score',
  imports: [],
  templateUrl: './bool-score.html',
  styleUrl: './bool-score.scss'
})

export class BoolScore {
  index:number=0

  @Input()
   mat:string[][]=[]

   @Input()
   boolim:number[]=[]

   @Input()
   pgiot:number[]=[]

  win(){
    alert("You wonnnnnnnnnnnnnnn!!!!")
  }

  // loose(){
  //   this.index++
  //   if(this.index==32){
  //     alert("you loose")
  //   }
  // }

}
