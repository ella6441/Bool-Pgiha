import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colors',
  imports: [FormsModule],
  templateUrl: './colors.html',
  styleUrl: './colors.scss'
})
export class Colors {


  colors: string[] = ["red", "yellow", "green", "blue", "pink", "purple"];
  selected: WritableSignal<string> = signal("");
  last: string[] = ["", "", ""]
  msg: string = ""


  choose() {
    if(this.msg != "")
      this.msg = ""
    if (this.selected() == this.last[this.last.length - 1] || this.selected() == this.last[this.last.length - 2] ||
      this.selected() == this.last[this.last.length - 3])
      {
      this.msg = "You choose this color already"
      return

      }
    this.last.push(this.selected())





  }


}
