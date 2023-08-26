import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css'],
})
export class UserHeaderComponent implements OnInit{
  
  retrievedFirstName: string | null = null;
  retrievedLastName: string | null = null;
  retrievedCreditBalance: string | null = null;

  constructor() {}

  ngOnInit() {
    this.retrievedFirstName = sessionStorage.getItem('firstName');
    this.retrievedLastName = sessionStorage.getItem('lastName');
    this.retrievedCreditBalance = sessionStorage.getItem('creditBalance');
  }
}
