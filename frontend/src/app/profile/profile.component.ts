import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username:String='USERNAME';
  email:String="email@alumni.com"
  creation_dt:String="just born"
  constructor(private _user:UserService) { 
    this._user.user()
    .subscribe(
      data=>this.userDetails(data),
      error=>console.log("Couldn't get user details")
    )
  }

  userDetails(data){
    this.username = data.username;
    this.email = data.email;
    this.creation_dt = data.creation_dt;
  }

  ngOnInit() {
  }

}
