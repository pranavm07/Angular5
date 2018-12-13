import { Component, OnInit } from '@angular/core';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-requisition',
  templateUrl: './requisition.component.html',
  styleUrls: ['./requisition.component.css']
})
export class RequisitionComponent implements OnInit {
    searches: string[] = [];
    public requisitionFormShow: boolean = false;
    requisitionForm: FormGroup;
    hrManagerName: FormControl;
    businessUnitControl: FormControl;
    projectNameControl: FormControl;
    primarySkillControl: FormControl;
    secondarySkillControl: FormControl;
    otherSkills: FormControl;
    positionControl: FormControl;
    experienceControl: FormControl;
    ofPositionControl: FormControl;
    positionTypeControl: FormControl;
    contractDurationControl: FormControl;
    salRangeControl: FormControl;
    public businessUnitList = [{
        businessUnit:'Healthcare'
    },
        {
            businessUnit: 'CRM'
        },
        {
            businessUnit: 'Others'
        }]
    public businessUnits: Array<any>;
    public primarySkill: Array<any>;
    public secondarySkill: Array<any>;
    public skills = [
        {
            skill: 'HTML'
        },
        {
            skill: 'CSS'
        },
        {
            skill: 'Angular'
        },
        {
            skill: '.net'
        },
        {
            skill: 'C#'
        },
        {
            skill: 'Java'
        }];
    public position: Array<any>;
    public positionList = [{
        position: 'Technical Project Manager'
    },
    {
        position: 'BA'
    },
    {
        position: 'Technical Lead'
    },
    {
        position: 'Technical Consultant'
    },
    {
        position: 'Test Lead'
    },
    {
        position: 'Test Consultant'
    },
    {
        position: 'HR Lead'
    },
    {
        position: 'HR Executive'
    },
    {
        position: 'Marketing Executive'
    },
    {
        position: 'Marketing Lead'
    },
    {
        position: 'Others'
        }];
    public positionType: Array<any>;
    public positionTypeList = [{
        name:'Permanent'
    },
        {
            name: 'Contract'
        }, {
            name: 'Others'
        }]
    constructor() {
      
    }

    ngOnInit() {
        this.createForm();
        
    
  }
    
    searchTerm(val) {
        
    }
    createForm() {
        this.requisitionForm = new FormGroup({
            hrManagerName: new FormControl({ value: 'hr', disabled: true }, [Validators.required]),
            businessUnitControl: new FormControl({ value: this.businessUnits }, [Validators.required]),
            projectNameControl: new FormControl(''),
            primarySkillControl: new FormControl({ value: this.primarySkill }, [Validators.required]),
            secondarySkillControl: new FormControl({ value: this.secondarySkill }),
            otherSkills: new FormControl(''),
            positionControl: new FormControl({ value: this.position }, [Validators.required]),
            experienceControl: new FormControl('', [Validators.required, Validators.min(0), Validators.max(25)]),
            ofPositionControl: new FormControl('', [Validators.required, Validators.min(1), Validators.max(9)]),
            positionTypeControl: new FormControl({ value: this.positionType }, [Validators.required]),
            contractDurationControl: new FormControl('', [Validators.required, Validators.min(1)]),
        });
    }
    newRequisitionClick() {
        this.requisitionFormShow = true;
    }
}
