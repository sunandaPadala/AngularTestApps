import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from 'src/app/services/dashboard-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  tableValues: any;
  cols = [
    { field: 'userId', header: 'UserId' },
    { field: 'id', header: 'Id' },
    { field: 'title', header: 'Title' },
    { field: 'body', header: 'Body' }
];
  constructor(private service: DashboardServiceService) { }

  ngOnInit(): void {
    this.getTableData()
  }

  getTableData(){
    this.service.getData(environment.url).subscribe(res=>{
      console.log("res",res)
      this.tableValues = res
    })
  }
}
