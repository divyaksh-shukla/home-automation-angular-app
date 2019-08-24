import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboardd',
  templateUrl: './dashboardd.component.html',
  styleUrls: ['./dashboardd.component.less']
})
export class DashboarddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Dashboard init');
  }

}
