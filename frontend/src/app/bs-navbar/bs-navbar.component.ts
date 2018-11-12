import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  username:String='USERNAME';
  LoginStatus:String;
  constructor(private _user:UserService, private _router:Router) { 
    this.LoginStatus = this._user.loginStatus;
    this._user.user()
    .subscribe(
      data=>this.addName(data),
      error=>this._router.navigate(['/login'])
    )
  }

  addName(data){
    this.username = data.username;
  }
  ngOnInit() {
    this._user.loginStatusEmitter.subscribe(status => {
      this.LoginStatus = status;
    })
  }

  logout(){
    this._user.logout()
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/login'])},
      error=>console.error(error)
    )
  }
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = ! this.navbarOpen;
  }

}
