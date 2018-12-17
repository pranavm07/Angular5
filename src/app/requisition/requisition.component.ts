import { Component, OnInit } from '@angular/core';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder,
    Form
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Requisition } from "../models/requisition"
import { RequisitionService } from '../services/requisition.service';

@Component({
    selector: 'app-requisition',
    templateUrl: './requisition.component.html',
    styleUrls: ['./requisition.component.css']
})
export class RequisitionComponent implements OnInit {
    reqDateModel = new Date().toISOString().split('T')[0];
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
    interviewPanelControl: FormControl;
    positionIdControl = new FormControl();
    posClosureControl: FormControl;
    jobDescriptControl: FormControl;
    filteredOptions: Observable<string[]>;
    public businessUnitList: any;
    public businessUnits: Array<any>;
    public primarySkill: Array<any>;
    public secondarySkill: Array<any>;
    public primarySkills: any;
    public secondarySkills: any;
    public position: Array<any>;
    public positionList: any;
    public positionType: Array<any>;
    public positionTypeList: any;
    public validateForm: boolean = false;
    constructor(private requisitionService: RequisitionService) {

    }

    ngOnInit() {
        this.requisitionService.getDropdownValues().subscribe(data=>{
                  let dataJson: any = data;
                  this.businessUnitList=dataJson.Data.BusinessUnit;
                  this.primarySkills=dataJson.Data.SkillSets;
                  this.secondarySkills= dataJson.Data.SkillSets;
                  this.positionList= dataJson.Data.Positions;
                  this.positionTypeList=dataJson.Data.PositionTypes;
        });
        this.positionIdControl.valueChanges.subscribe(val => {
            if (val.length > 2) {
                this.requisitionService.searchPositionId(val.toLowerCase()).subscribe(data => {
                    let list: any = data;
                    this.filteredOptions = list.Data;
                });
            }
        });
        this.createForm();
    }
    positionIDSelect(selectOption){
        this.requisitionService.getRequisitionDetails(selectOption.RequisitionId).subscribe(data=>{
            this.requisitionFormShow=true;
            let details: any= data
            this.requisition=details.Data;
            debugger
            this.requisition.RequisitionDate=new Date(details.Data.RequisitionDate).toISOString().split('T')[0];;
            this.requisition.PositionClosureDate=new Date(details.Data.PositionClosureDate).toISOString().split('T')[0];;
            let interviewPanel ="";
           details.Data.InterviewPanel.forEach(function(elem,index){
                if(index != details.Data.InterviewPanel.length){
                    interviewPanel= interviewPanel+' '+elem.InterviewerName+','
                }
                else{
                    interviewPanel= interviewPanel+' '+elem.InterviewerName;

                }
            });
            this.requisition.InterviewPanelString=interviewPanel;
        });
       
    }
    searchInterviewPanel() {
        if (this.requisition.InterviewPanelString.length > 3) {
            this.requisitionService.searchInterviewpanelDropdown(this.requisition.InterviewPanelString).subscribe(data => {
                debugger
                console.log(data);
            });
        }
    }
    primaryskillSelect() {
        if (this.requisition.PrimarySkill == this.requisition.SecondarySkill) {
            this.requisition.SecondarySkill = null;
        }
        this.secondarySkills.forEach(element => {
            if (element.Value == this.requisition.PrimarySkill) {
                element.disabled = true
            }
            else {
                element.disabled = false;
            }
        });
    }
    createForm() {
        this.requisitionForm = new FormGroup({
            hrManagerName: new FormControl({ value: 'Shailesh', disabled: true }, [Validators.required]),
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
            posClosureControl: new FormControl(''),
            jobDescriptControl: new FormControl('', [Validators.required])
        });
    }
    newRequisitionClick() {
        this.requisitionFormShow = true;
    }
    requisitionFormSubmit(form: Form) {
        this.validateForm = true;
    }
}
