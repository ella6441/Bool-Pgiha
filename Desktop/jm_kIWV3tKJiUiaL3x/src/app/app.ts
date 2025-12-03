import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1 } from './components/comp1/comp1';
import { Calculator } from './components/calculator/calculator';
import { Code } from './components/code/code';
import { Colors } from './components/colors/colors';
import { BoolSelectColor } from './components/bool-select-color/bool-select-color';
import { BoolBoard } from './components/bool-board/bool-board';
import { BoolScore } from './components/bool-score/bool-score';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Code, Calculator, Colors, BoolSelectColor, BoolBoard, BoolScore],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('t1');


  
}
