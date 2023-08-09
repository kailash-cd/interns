  import { Component, OnInit, OnDestroy } from '@angular/core';
  import { Router, NavigationEnd } from '@angular/router';
  import { filter } from 'rxjs/operators';
  import { Subscription } from 'rxjs';


  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  })


  export class HeaderComponent implements OnInit {
    usersessionboolcheck = false;
    userImgBOOL = false;
    userdefaultIMG = "../../assets/imgfolder/userimg.png";
    userData:any;
    userOriganlData:any;
    ngOnInit(): void {
       this.usersessionboolcheck = sessionStorage.getItem("userData") !==null;
      
      console.log(" the user sessionstorage is : ", this.usersessionboolcheck);
      if(this.usersessionboolcheck){
            this.userData = sessionStorage.getItem("userData");
            this.userOriganlData = JSON.parse(this.userData);
            console.log("the user data is : ",this.userOriganlData);

            // this.userdefaultIMG = this.userData.userPhotoUrl
      }
  
  }
}

