import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

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

  username: String = '';
  constructor(private _router: Router, private _userService: UserService) { }

  ngOnInit() {
  }

  correct: string;

  sendfeedback() {
    if (!this.contactForm.valid) {
      console.log('Invalid Form');
      this.correct = "*Please enter all the above feilds!";
      return;
    }
    this._userService.contact(JSON.stringify(this.contactForm.value))
      .subscribe(
        data => { console.log(data); this.correct = "Your feedback has been submitted!"; },
        error => this.correct = "*Please enter all the above feilds!"
      )
  }
}