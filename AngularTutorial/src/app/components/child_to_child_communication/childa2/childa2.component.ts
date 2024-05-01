import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childa2',
  template: `
    <h3>Child A2 Component</h3>
  `,

})
export class Childa2Component implements OnInit {
  ngOnInit(): void {
    this.data.emit('Data from child A2 component');
  }
  @Output() data : EventEmitter<any> = new EventEmitter();

}
