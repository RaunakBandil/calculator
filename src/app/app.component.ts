import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  num1!: any;
  num2!: any;
  input: any = "";
  pressnum(num: string) {
    console.log(num)
    this.input += num
  }
  pressoperator(op: string) {
    const lastkey = this.input[this.input.length - 1]
    if (lastkey === '+' || lastkey === '-' || lastkey === '*' || lastkey === '/') {
      return;
    }
    this.input = this.input + op
    console.log(op)
    switch (op) {
      case '+':
        return this.num1 + this.num2
        break;
      case '-':
        return this.num1 - this.num2
        break;
      case '%':
        return this.num1 % this.num2
        break;
      case '*':
        return this.num1 * this.num2
        break;
      case '/':
        return this.num1 / this.num2
        break;
      case '+/-':
        return this.input = -parseFloat(this.input);
        break;
      default:
        this.input = this.num1
    }

  }
  answer() {
    this.input = eval(this.input)
    console.log(this.input)
  }
  allClear() {
    this.input = "";
  }

  storedTheme: string | null = localStorage.getItem('theme-color');

  setTheme() {
    if (this.storedTheme === 'theme-dark') {
      localStorage.setItem('theme-color', 'theme-light');
      this.storedTheme = localStorage.getItem('theme-color');

    } else {
      //toggle and update local storage
      localStorage.setItem('theme-color', 'theme-dark');
      this.storedTheme = localStorage.getItem('theme-color');

    }
  }

}
