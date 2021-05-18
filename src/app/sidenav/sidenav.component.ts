import { Component,OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

 items: MenuItem[];

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
