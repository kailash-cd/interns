import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refer',
  templateUrl: './refer.component.html',
  styleUrls: ['./refer.component.css']
})
export class ReferComponent implements OnInit {

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
