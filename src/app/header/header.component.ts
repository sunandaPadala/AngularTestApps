import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  display = false;
  items: any;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Sample Table'},
      {label: 'Pagination Table'},
      {label: 'Forms'},
      {label: 'Forms with Upload'}
  ];
  }

  }


