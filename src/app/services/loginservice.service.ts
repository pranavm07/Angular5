import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import {login} from '../models/login';
import 'rxjs'
@Injectable()

export class LoginserviceService {
  readonly loginUrl ="http://localhost:579845/auth/login";
  constructor(private http:HttpClient) { }
  login(mdlLogin:login){
return this.http.post(this.loginUrl,mdlLogin,
  {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
  })
  }
}
