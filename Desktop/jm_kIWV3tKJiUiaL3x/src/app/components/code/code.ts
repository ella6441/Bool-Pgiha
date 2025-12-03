import { Component, computed, input, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';

@Component({
  selector: 'app-code',
  imports: [FormsModule],
  templateUrl: './code.html',
  styleUrl: './code.scss'
})
export class Code {

  regular: string = "abcdefghijklmnopqrstuvwxyz"
  atbash: string[] = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']
  numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26']
  okev: string[] = ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a']
  text: WritableSignal<string> = signal("");
 selectHash: WritableSignal<string> = signal('numbers')

 answer: Signal<string> = computed (()=>{
  
  switch(this.selectHash()){
    case 'numbers':
      return this.text().split("").map(x=>this.numbers[this.regular.indexOf(x)]).join("");
    case 'atbash':
      return this.text().split("").map(x=>this.atbash[this.regular.indexOf(x)]).join("");
    case 'okev':
        return this.text().split("").map(x=>this.okev[this.regular.indexOf(x)]).join("");

  }
  return " "


 })






}
