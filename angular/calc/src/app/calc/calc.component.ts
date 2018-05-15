import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

   formula: string='';
  constructor() { }

  ngOnInit() {
  }

  clickDelete() {
    this.formula = '';
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
