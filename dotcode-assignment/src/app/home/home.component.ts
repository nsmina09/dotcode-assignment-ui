import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public employees:any;

  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.getEmployeeDetails().subscribe((result:any)=>{
      console.log(result);
      this.employees=result.employee;
    },result=>{
      console.log(result);
      
    })
  }

}
