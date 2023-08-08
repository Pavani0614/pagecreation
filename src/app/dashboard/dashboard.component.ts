import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  User=[
    {name:'priya',age:'20',designation:'GET'},
    {name:'preethi',age:'27',designation:'HR'},   
    {name:'pavani',age:'25',designation:'CEO'}
    ]

}
