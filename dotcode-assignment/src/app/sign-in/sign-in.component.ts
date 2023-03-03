import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public email: any;
  public password: any;

  constructor(private ds: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    console.log(this.email);
    console.log(this.password);
    if (this.email == null || this.password == null) {

    } else {
      this.ds.signIn(this.email, this.password).subscribe((result: any) => {
        alert(result.message);
        this.router.navigateByUrl('/dash-board');
      },
        result => {
          alert(result.error.message)
        })
    }

  }

}
