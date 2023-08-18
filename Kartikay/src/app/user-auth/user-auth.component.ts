import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent {
  username = '';
  password = '';
  firstName = '';
  lastName = '';
  creditBalance = '';
  data: any;

  constructor(private authService: ApiService, private router: Router) {}

  login() {
    console.log(this.username, this.password, 'done');
    const body = {
      username: this.username,
      password: this.password,
      appname: 'GeoAd',
      portalName: 'geoad',
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
          this.dataSave();
          this.router.navigate(['/refer']);
        } else {
          console.log('error occurred');
        }
      },
      (error) => {
        // Handle login error
      }
    );
  }

  dataSave() {
    const x = document.getElementById('rememberMe') as HTMLInputElement;
    if (x.checked){
    sessionStorage.setItem('firstName', this.firstName);
    sessionStorage.setItem('lastName', this.lastName);
    sessionStorage.setItem('creditBalance', this.creditBalance);
  }
}
  // myFunction(){
  //   const x = document.getElementById('password') as HTMLInputElement;
  //   if (x.type === 'password') {
  //     x.type = 'text';
  //   } else {
  //     x.type = 'password';
  //   }
  // }
}
