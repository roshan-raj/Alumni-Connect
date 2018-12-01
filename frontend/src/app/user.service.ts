import { Injectable, Output, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Post } from './post.model';

@Injectable()
export class UserService {

  @Output() loginStatusEmitter: EventEmitter<String> = new EventEmitter()
  loginStatus = "false";

  posts: Post[];
  constructor(private _http:HttpClient) { }

  register(body:any){
    return this._http.post('http://127.0.0.1:3000/users/register',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  contact(body:any){
    return this._http.post('http://127.0.0.1:3000/contacts/contact',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  post(body:any){
    return this._http.post('http://127.0.0.1:3000/posts/post',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  login(body:any){
    this.loginStatus = "true"
    this.loginStatusEmitter.emit(this.loginStatus);
    return this._http.post('http://127.0.0.1:3000/users/login',body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  user(){
    return this._http.get('http://127.0.0.1:3000/users/user',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  profile(){
    return this._http.get('http://127.0.0.1:3000/users/user',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  getPosts(){
    return this._http.get('http://127.0.0.1:3000/posts/',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  logout(){
    this.loginStatus = "false"
    this.loginStatusEmitter.emit(this.loginStatus);
    return this._http.get('http://127.0.0.1:3000/users/logout',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

}
