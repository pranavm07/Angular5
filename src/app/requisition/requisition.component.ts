import { Component, OnInit } from '@angular/core';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Requisition} from "../models/requisition"

@Component({
  selector: 'app-requisition',
  templateUrl: './requisition.component.html',
  styleUrls: ['./requisition.component.css']
})
export class RequisitionComponent implements OnInit {
    reqDateModel= new Date().toISOString().split('T')[0];
    requisition: Requisition = new Requisition();
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
    expFromControl: FormControl;
    expToControl: FormControl;
    ofPositionControl: FormControl;
    positionTypeControl: FormControl;
    contractDurationControl: FormControl;
    salFromControl: FormControl;
    salToControl: FormControl;
    interviewPanelControl:FormControl;
    positionIdControl = new FormControl();
    posClosureControl:FormControl;
    jobDescriptControl: FormControl;

    options: string[] = ['Req1', 'Req2', 'Req3','abc123','def345ss'];

    filteredOptions: Observable<string[]>;
    public businessUnitList = [{
        businessUnit:'NHS'
    },
        {
            businessUnit: 'NES'
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
        this.filteredOptions = this.positionIdControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    
  }
    
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
            expFromControl: new FormControl('', [Validators.required, Validators.min(0), Validators.max(25)]),
            expToControl: new FormControl('', [Validators.required, Validators.min(0), Validators.max(25)]),
            ofPositionControl: new FormControl('', [Validators.required, Validators.min(1), Validators.max(9)]),
            positionTypeControl: new FormControl({ value: this.positionType }, [Validators.required]),
            contractDurationControl: new FormControl('', [Validators.required, Validators.min(1)]),
            salFromControl: new FormControl('', [Validators.required, Validators.min(1)]),
            salToControl: new FormControl('', [Validators.required, Validators.min(1)]),
            interviewPanelControl: new FormControl('', [Validators.required]),
            posClosureControl : new FormControl(''),
            jobDescriptControl: new FormControl('',[Validators.required])
        });
    }
    newRequisitionClick() {
        this.requisitionFormShow = true;
    }
}
