import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-approval',
  templateUrl: './pending-approval.component.html',
  styleUrls: ['./pending-approval.component.scss']
})
export class PendingApprovalComponent implements OnInit {
  items = [
    {label: 'Pending Approval'},
    {label: 'In Dispute'},
    {label: 'Approved'},
    {label: 'All'},
    {label: 'Carriers'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
