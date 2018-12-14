import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import 'rxjs'
@Injectable()
export class CandidateService {
    readonly rootUrl ="http://localhost:579845/Auth/skills";
    constructor( private http:HttpClient ) {

    }

    getDropDownValues() {
    
        debugger
        //var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'}); 
        return this.http.get('http://localhost:579845/Auth/skills');     
  
    }
}