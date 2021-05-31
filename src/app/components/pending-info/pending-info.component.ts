import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-info',
  templateUrl: './pending-info.component.html',
  styleUrls: ['./pending-info.component.scss']
})
export class PendingInfoComponent implements OnInit {
  @Input() time;
  @Input() carrier
  constructor() { }

  ngOnInit(): void {
  }

}
