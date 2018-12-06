import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  wrong: string;

  adminlogin() {
    if (!(this.loginForm.controls.username.value != "admin") || (this.loginForm.controls.password.value != "admin")) {
      this.wrong = "Sorry Invalid credentials!";
    }

    if ((this.loginForm.controls.username.value == "admin") && (this.loginForm.controls.password.value == "admin")) {
      this._router.navigate(['/admin']);
    }
  }

}
