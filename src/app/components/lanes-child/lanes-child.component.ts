import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lanes-child',
  templateUrl: './lanes-child.component.html',
  styleUrls: ['./lanes-child.component.scss']
})
export class LanesChildComponent implements OnInit {
  arr = [
    {
    header1: '3',
    text1: 'Carrier Rates Pending Approval',
    url1: '../assets/pending.png',
    header2: '250',
    text2: 'Approved Carrier Rates',
    url2: '../assets/approved.png'
    },
    {
      header1: '4',
      text1: 'Carrier Rates in Disputes',
      url1: '../assets/disputes.png',
      header2: '500',
      text2: 'All My Lanes',
      url2: '../assets/lanes.png'
    },
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
