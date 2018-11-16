import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
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
