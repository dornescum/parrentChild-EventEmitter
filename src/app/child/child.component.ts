import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child', templateUrl: './child.component.html', styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() channelName: string = '';
// trimit catre parinte
  @Output() sentMessageEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  sendMessageToParent(e: any) {
    // console.log(e.target.value)
    this.sentMessageEmitter.emit(e.target.value);
  }
}
