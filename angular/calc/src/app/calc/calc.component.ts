import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

   formula: string='1';
  constructor() { }

  ngOnInit() {
  }

  clickDelete() {
    this.formula = '0';
  }

  clickSign(e) {
    const previousResult =eval(this.formula);
    const sign = e;
    const result = sign !== "=" ? previousResult + e : previousResult;
    this.formula =result;
  
  }

  clickNumber(e) {
    const result = this.formula + e;
    this.formula=  result;
  
  }
}
