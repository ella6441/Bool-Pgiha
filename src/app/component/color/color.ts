import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';

@Component({
  selector: 'app-color',
  imports: [FormsModule],
  templateUrl: './color.html',
  styleUrl: './color.scss'
})
export class Color {

  colors:string[]=["red","yellow","green","blue","pink","purple"];
  selected:WritableSignal<string> = signal("red");
  last:string[]=["","",""];
  message:string="";

  
  choose()
  {
    if(this.selected()==this.last[this.last.length-1] ||this.selected()==this.last[this.last.length-2] || this.selected()==this.last[this.last.length-3] )
       {
      this.message="you choose me already...";
      return;
    }
    this.last.push(this.selected());
  }

}
