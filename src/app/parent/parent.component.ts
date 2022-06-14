import {Component, OnInit} from '@angular/core';
import {SharedService} from "src/app/shared.service";

@Component({
  selector: 'app-parent', templateUrl: './parent.component.html', styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  channelNameInParent: string = 'Testing';
  msgFromChild: string = '';
  firstNum = 0;
  secondNum = 0;
  output = 0;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
  }

  receiveMessage(msg: any) {
    // console.log(msg)
    this.msgFromChild = msg;
  }

  calculate() {
    console.log(this.firstNum)
    console.log(this.sharedService.state)
    this.output =this.sharedService.calculate(this.firstNum, this.secondNum)
  }
  onSubmit() {
    console.log(this.firstNum)
    return this.firstNum;
  }
}
