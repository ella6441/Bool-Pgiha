import { Component } from '@angular/core';
import { CalModel } from '../../models/cal.model';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss'
})
export class Calculator {

  number1: number = 0
  number2: number = 0
  sign?: string
  flag: boolean = true
  answer?: number
  model: CalModel = { number1: this.number1, sign: this.sign, number2: this.number2 }
  numberToShow!: Number
  press1() {
    let num = 10
    if (this.number1 == 0 && this.sign == null) {
      this.number1 = 1
      this.numberToShow = this.number1
    }
    else if (this.number1 != 0 && this.sign == null) {
      this.number1 = this.number1 * num + 1
      console.log(this.number1);
      this.numberToShow = this.number1
    }
    else if (this.sign != null) {

      if (this.number2 == 0)
        this.number2 = 1
      else
        this.number2 = this.number2 * num + 1
      this.flag = false
      this.numberToShow = this.number2

    }

  }
  press2() {
   let num = 10
    if (this.number1 == 0 && this.sign == null) {
      this.number1 = 2
      this.numberToShow = this.number1
    }
    else if (this.number1 != 0 && this.sign == null) {
      this.number1 = this.number1 * num + 2
      console.log(this.number1);
      this.numberToShow = this.number1
    }
    else if (this.sign != null) {

      if (this.number2 == 0)
        this.number2 = 2
      else
        this.number2 = this.number2 * num + 2
      this.flag = false
      this.numberToShow = this.number2

    }



  }
  press3() {
    let num = 10
    if (this.number1 == 0 && this.sign == null) {
      this.number1 = 3
      this.numberToShow = this.number1
    }
    else if (this.number1 != 0 && this.sign == null) {
      this.number1 = this.number1 * num + 3
      console.log(this.number1);
      this.numberToShow = this.number1
    }
    else if (this.sign != null) {

      if (this.number2 == 0)
        this.number2 = 3
      else
        this.number2 = this.number2 * num + 3
      this.flag = false
      this.numberToShow = this.number2

    }

  }
  press4() {
  let num = 10
    if (this.number1 == 0 && this.sign == null) {
      this.number1 = 4
      this.numberToShow = this.number1
    }
    else if (this.number1 != 0 && this.sign == null) {
      this.number1 = this.number1 * num + 4
      console.log(this.number1);
      this.numberToShow = this.number1
    }
    else if (this.sign != null) {

      if (this.number2 == 0)
        this.number2 = 4
      else
        this.number2 = this.number2 * num + 4
      this.flag = false
      this.numberToShow = this.number2

    }

  }
  press5() {
   let num = 10
    if (this.number1 == 0 && this.sign == null) {
      this.number1 = 5
      this.numberToShow = this.number1
    }
    else if (this.number1 != 0 && this.sign == null) {
      this.number1 = this.number1 * num + 5
      console.log(this.number1);
      this.numberToShow = this.number1
    }
    else if (this.sign != null) {

      if (this.number2 == 0)
        this.number2 = 5
      else
        this.number2 = this.number2 * num +5
      this.flag = false
      this.numberToShow = this.number2

    }

  }
  press6() {
    let num = 10
    if (this.number1 == 0 && this.sign == null) {
      this.number1 = 6
      this.numberToShow = this.number1
    }
    else if (this.number1 != 0 && this.sign == null) {
      this.number1 = this.number1 * num + 6
      console.log(this.number1);
      this.numberToShow = this.number1
    }
    else if (this.sign != null) {

      if (this.number2 == 0)
        this.number2 = 6
      else
        this.number2 = this.number2 * num + 6
      this.flag = false
      this.numberToShow = this.number2

    }

  }
  press7() {
    let num = 10
    if (this.number1 == 0 && this.sign == null) {
      this.number1 = 7
      this.numberToShow = this.number1
    }
    else if (this.number1 != 0 && this.sign == null) {
      this.number1 = this.number1 * num + 7
      console.log(this.number1);
      this.numberToShow = this.number1
    }
    else if (this.sign != null) {

      if (this.number2 == 0)
        this.number2 = 7
      else
        this.number2 = this.number2 * num + 7
      this.flag = false
      this.numberToShow = this.number2

    }

  }
  press8() {
    let num = 10
    if (this.number1 == 0 && this.sign == null) {
      this.number1 = 8
      this.numberToShow = this.number1
    }
    else if (this.number1 != 0 && this.sign == null) {
      this.number1 = this.number1 * num + 8
      console.log(this.number1);
      this.numberToShow = this.number1
    }
    else if (this.sign != null) {

      if (this.number2 == 0)
        this.number2 = 8
      else
        this.number2 = this.number2 * num + 8
      this.flag = false
      this.numberToShow = this.number2

    }

  }
  press9() {
    let num = 10
    if (this.number1 == 0 && this.sign == null) {
      this.number1 = 9
      this.numberToShow = this.number1
    }
    else if (this.number1 != 0 && this.sign == null) {
      this.number1 = this.number1 * num + 9
      console.log(this.number1);
      this.numberToShow = this.number1
    }
    else if (this.sign != null) {

      if (this.number2 == 0)
        this.number2 = 9
      else
        this.number2 = this.number2 * num + 9
      this.flag = false
      this.numberToShow = this.number2

    }

  }
  press0(){
     let num = 10
    if (this.number1 == 0 && this.sign == null) {
      this.number1 = 0
      this.numberToShow = this.number1
    }
    else if (this.number1 != 0 && this.sign == null) {
      this.number1 = this.number1 * num + 0
      console.log(this.number1);
      this.numberToShow = this.number1
    }
    else if (this.sign != null) {

      if (this.number2 == 0)
        this.number2 = 0
      else
        this.number2 = this.number2 * num + 0
      this.flag = false
      this.numberToShow = this.number2

    }
  }

  pressPlus() {
    this.sign = "+"


  }
  pressMinus() {
    this.sign = "-"


  }
  pressMulti() {
    this.sign = "*"

  }
  pressDivide() {
    this.sign = "/"

  }
  pressAnswer() {
    if (this.sign == "+")
      this.answer = this.number1 + this.number2
    else if (this.sign == "-")
      this.answer = this.number1 - this.number2
    else if (this.sign == "*")
      this.answer = this.number1 * this.number2
    else
      this.answer = this.number1 / this.number2
    this.numberToShow = this.answer
    this.number1 = this.answer
    this.number2 = 0


  }



}
