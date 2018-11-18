import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { error } from 'util';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    feedback: new FormControl(null, [Validators.required])
  })
  constructor(private _router: Router, private _userService:UserService) { }

  ngOnInit() {
  }

  sendfeedback() {
    if (!this.contactForm.valid) {
      console.log('Invalid Form'); return;
    }
    this._userService.contact(JSON.stringify(this.contactForm.value))
    .subscribe(
      data=> {console.log(data)},
      error=> console.error(error)
    )
  }
}