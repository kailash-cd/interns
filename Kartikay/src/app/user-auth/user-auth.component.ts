import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  username = "";
  password = "";
  firstName = "";
  lastName = "";
  creditBalance = "";
  data: any;


  constructor(
    private authService: ApiService,
    private router: Router
  ) {}
  

  login() {
    console.log(this.username, this.password, "done");
    const body = {
      "username": this.username,
      "password": this.password,
      "appname": "GeoAd",
      "portalName": "geoad"
    };
    this.authService.login(body).subscribe(
      (response: any) => {
        console.log(response);
        if (response.status === 0) {
          this.data = response.response;
          console.log('this data', this.data);
          this.firstName = this.data.profile.firstName;
          console.log(this.firstName);
          this.lastName = this.data.profile.lastName;
          console.log(this.lastName);
          this.creditBalance = this.data.creditBalance;
          console.log(this.creditBalance);
          this.dataSave(); // Save data to session storage
          this.router.navigate(['/refer']); // Navigate after saving
        } else {
          console.log("error occurred");
        }
      },
      (error) => {
        // Handle login error
      }
    );
  }

  dataSave() {
    sessionStorage.setItem('firstName', this.firstName);
    sessionStorage.setItem('lastName', this.lastName);
    sessionStorage.setItem('creditBalance', this.creditBalance);
  }
}
