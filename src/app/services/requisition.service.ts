import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import 'rxjs';
import { AppConfig } from '../config/app.config';
import { Constants } from '../config/constants';

@Injectable({
  providedIn: 'root'
})
export class RequisitionService {
  readonly rootUrl = "http://localhost:57985/common";
  constructor(private http: HttpClient,public config: AppConfig, public constantVal:Constants) { }
  getDropdownValues() {
    return this.http.get(this.config.RootUrl+this.config.CommonUrl+this.constantVal.dropdownUrl);
  }
  searchPositionId(string) {
    return this.http.get(this.config.RootUrl+this.config.RequisitionUrl+'positionbyuser/Shailesh/'+string);
  }
  searchInterviewpanelDropdown(string) {
    return this.http.get(this.rootUrl);
  }
  getRequisitionDetails(reqID){
    return this.http.get(this.config.RootUrl+this.config.RequisitionUrl+'requisitiondetails/'+reqID)
  }

}
