import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  username:String='USERNAME';
  email:String="email@alumni.com"
  creation_dt:String="just born"
  usn:String="--not added--"
  phone:String="--not added--"
  profession:String="--not added--"

  editForm:FormGroup = new FormGroup({
    usn:new FormControl(null,[Validators.required]),
    phone:new FormControl(null,Validators.required),
    profession:new FormControl(null,Validators.required)
  })

  constructor(private _userService:UserService, private _router:Router) { 
    this._userService.user()
    .subscribe(
      data=>this.userDetails(data),
      error=>console.log("Couldn't get user details")
    )
  }

  userDetails(data){
    this.username = data.username;
    this.email = data.email;
    this.creation_dt = data.creation_dt;
    this.usn = data.usn;
    this.phone = data.phone;
    this.profession = data.profession;
  }

  ngOnInit() {
  }

  edit(){
    if(!this.editForm.valid || (this.editForm.controls.password.value != this.editForm.controls.cpass.value)){
      console.log('Invalid Form'); return;
    }

    this._userService.edit(JSON.stringify(this.editForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/profile']);},
      error=>console.error(error)
    )
    // console.log(JSON.stringify(this.editForm.value));
  }

}
