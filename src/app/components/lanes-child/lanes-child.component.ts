import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lanes-child',
  templateUrl: './lanes-child.component.html',
  styleUrls: ['./lanes-child.component.scss']
})
export class LanesChildComponent implements OnInit {
  @Input() image;
  @Input() header;
  @Input() text;
  constructor() { }

  ngOnInit(): void {
  }

}
