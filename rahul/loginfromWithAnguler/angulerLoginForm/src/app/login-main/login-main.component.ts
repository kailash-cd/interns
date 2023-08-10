import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})  
export class LoginMainComponent implements OnInit{

  constructor(private router: Router) {}
  

  emptyFieldsMessage = '';
  errorMessage = '';
  checkvalue = false;
  ngOnInit(): void {
    sessionStorage.clear();
  }
  async action() {
    console.log(" i am in function calling ");
    const email = (<HTMLInputElement>document.getElementById('emailid')).value;
    const pass = (<HTMLInputElement>document.getElementById('passwordid')).value;

    if (email === '' || pass === '' || this.checkvalue === false) {
      this.emptyFieldsMessage = 'Fill All the fields';
    } else {
      const ans = this.validateEmail(email, pass);
      if (ans) {
        try {
          const data = { username: email, password: pass, portalName: 'geoad' };
          console.log(" the data is : ", data);
          const response = await axios.post('http://localhost:4000/api/test', data);
          const result = response.data;
          console.log('the result is : ', result);
          if (result.message.status === -1) {
            this.errorMessage = result.message.edesc;
            console.log('Log-in Details are Invalid');


          } else if(result.message.status === 0) {
            const firstName = result.message.response.agentInfo.firstName;
            const lastName = result.message.response.agentInfo.lastName;
            const fullName = `${firstName} ${lastName}`;

            const creditBalance = result.message.response.creditBalance;
            const jwtToken = result.message.response.refreshToken;
            const userPhoto = result.message.response.profile.photoUrl;
            console.log(creditBalance, 'the user creditBalance');
            console.log(userPhoto, 'the user photo url');

            const userData = {
              token: jwtToken,
              username: fullName,
              creditBalance: creditBalance,
              userPhotoUrl: userPhoto,
            };
            sessionStorage.setItem('userData', JSON.stringify(userData));
            this.navigateToAbout()
          }

        } catch (error) {
          console.error('Error:', error);
        }
      }
    }
  }

  navigateToAbout() {
    this.router.navigate(['/welcomepage']);
  }



  validateEmail(email: string, pass: string): boolean {
    // Implement your email validation logic here
    return true; // Replace with actual validation result
  }

  checkbox(){
    if(this.checkvalue ===  false){
      this.checkvalue = true;
    }
  else{
      this.checkvalue = false;
  }}
  togglePasswordVisibility(): void {
    const passwordInput = document.getElementById('passwordid') as HTMLInputElement;
    const showButton = document.getElementById('showbutton');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      if (showButton) {
        showButton.textContent = 'Hide';
      }
    } else {
      passwordInput.type = 'password';
      if (showButton) {
        showButton.textContent = 'Show';
      }
    }
  }

}
