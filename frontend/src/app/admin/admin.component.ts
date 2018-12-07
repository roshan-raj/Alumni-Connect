import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AllUser } from '../alluser.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public _userService: UserService) { }

  ngOnInit() {
    this.refreshAllUserList();
  }

  refreshAllUserList() {
    this._userService.getAllUsers().subscribe((res) => {
      this._userService.alluser = res as AllUser[];
    });
  }

}
