import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1 } from './component/comp1/comp1';
import { Calculator } from './component/calculator/calculator';
import { Code } from './component/code/code';
import { Color } from './component/color/color';
import { BoolSelectColor } from './component/bool-select-color/bool-select-color';
import { BoolBoard } from './component/bool-board/bool-board';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Comp1,Calculator,Code,Color,BoolSelectColor,BoolBoard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('t1');

}
