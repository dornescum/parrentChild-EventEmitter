import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  state = 5;
  constructor() { }
  calculate(firstNum:number, secondNum:number){
    return firstNum + secondNum
  }
}
