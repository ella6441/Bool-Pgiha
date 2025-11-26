import { Component, Output, output } from '@angular/core';
import { BoolSelectColor } from '../bool-select-color/bool-select-color';
import { BoolScore } from '../bool-score/bool-score';

//האבא - הקומפוננטה הראשית
@Component({
  selector: 'app-bool-board',
  imports: [BoolSelectColor,BoolScore],
  templateUrl: './bool-board.html',
  styleUrl: './bool-board.scss'
})
export class BoolBoard {

    // @Output()
    colorsOptions: string[]=["red","blue","pink","green","orange","yellow"]
    mat:string[][]=Array(8).fill(Array(4).fill(""))
    goal:string[]=[]
    monim:boolean[]=[false,false,false,false,false,false]
    line:number=0
    bool:number=0
    pgiha:number=0
    boolim:number[]=[]
    pgiot:number[]=[]

    constructor() {
      this.fillGoal()
      console.log(this.goal);
      
    }
      fillGoal(){
        for (let index = 0; index < 4; index++) {
          let rand=Math.floor(Math.random()*6)
          if(this.monim[rand]==false)
          {
            // this.goal[index]=this.colorsOptions[rand]
            this.monim[rand]=true
            this.goal.push(this.colorsOptions[rand])
          }
          else{
            index--
          }
        }
      }
     
      SetAddColor(arrColor: string[])
      { 
        if(this.line==8){
          alert("You lose!!!!")
            return

        }
          this.mat[this.line]=arrColor
          console.log(this.mat[this.line]);
          if(arrColor[arrColor.length - 1] != "" && this.line<8)
          {
            this.line++
            this.check(arrColor)
          }
          
      }

      check(arrColor: string[])
      {
        for (let index = 0; index < 4; index++) {
          if(arrColor.includes(this.goal[index]) && arrColor[index]!=this.goal[index])
            this.pgiha++
          if(arrColor.includes(this.goal[index]) && arrColor[index]==this.goal[index])
            this.bool++
        }
      this.boolim.push(this.bool);
      this.pgiot.push(this.pgiha);
      this.bool=0
      this.pgiha=0
      console.log("bool", this.boolim);
      console.log("pgia",this.pgiot);
      }
    
}