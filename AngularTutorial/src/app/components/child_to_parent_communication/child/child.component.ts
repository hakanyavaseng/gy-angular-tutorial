import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
    <h3>Child Component</h3>
  `,

})
export class ChildComponent implements OnInit{
  ngOnInit(): void {
    this.dataEvent.emit('Data from child component');
  }
  @Output() dataEvent : EventEmitter<any> = new EventEmitter();

}
