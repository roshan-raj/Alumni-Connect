import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.css']
})
export class MainscreenComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  moveToLogin() {
    this._router.navigate(['/login']);
  }

}
