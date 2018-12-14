import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {Candidate} from "../models/candidate"
export interface PositionType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
  providers:[Candidate]
})


export class CandidateComponent implements OnInit {

  constructor(public candidate : Candidate) { }
  positions: PositionType[] = [
    {value: '0', viewValue: 'Permanent'},
    {value: '1', viewValue: 'Contract'},
    {value: '2', viewValue: 'Others'}
  ];
  ngOnInit() {
  }

  saveCandidate(saveCandidateForm: NgForm) {
    debugger
  }

}
