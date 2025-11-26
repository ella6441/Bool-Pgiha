import { Component, computed,signal, Signal,WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-code',
  imports: [FormsModule],
  templateUrl: './code.html',
  styleUrl: './code.scss'
})
export class Code {

  regular:string='abcdefghijklmnopqrstuvwxyz'
  atbash:string[]=['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a']
  numbers:string[]=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26']
  okev: string[] = ['b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a']

  text:WritableSignal<string>=signal("")
  additionLetter:WritableSignal<string>=signal('')
  selectCode:WritableSignal<string>=signal('numbers')

  answer:Signal<string>= computed(()=>{
    switch (this.selectCode()){
      case 'numbers':
        return this.text().split("").map(x=>this.numbers[this.regular.indexOf(x)]).reduce((x,y)=>x+y).toString()
      case 'atBash' :
        return this.text().split("").map(x=>this.atbash[this.regular.indexOf(x)]).reduce((x,y)=>x+y).toString()
      case 'okev':
        return this.text().split("").map(x=>this.okev[this.regular.indexOf(x)]).reduce((x,y)=>x+y).toString()
    }
      return " "
  })
}
