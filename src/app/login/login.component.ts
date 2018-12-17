import { Component, OnInit } from '@angular/core';
import {loginAccess} from '../models/loginAccess';
import{login} from '../models/login';
import {LoginService} from '../services/login.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[login,loginAccess]
})
export class LoginComponent implements OnInit {

  constructor(public userDetails:loginAccess, private _loginservice:LoginService, public loginModel:login) { }

  ngOnInit() {
  }
userLogin(loginForm:NgForm)
{
 this._loginservice.login(this.loginModel).subscribe(data=>{
this.userDetails=data as loginAccess;

});
}
}
