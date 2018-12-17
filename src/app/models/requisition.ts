export class Requisition {
  RequisitionDate:String;
    HiringManagerName: String;
    BusinessUnitDetails: {
      CodeId:string,
      Value:string
    }
    ProjectName : String;
    PrimarySkill: String;
    SecondarySkill: String;
    OtherSkill: String;
    PositionNameDetails: {
       Code:string,
       Value:string
    };
    ExperienceLevelFrom: Number;
    ExperienceLevelTo: Number;
    NumberOfPosition: Number;
    PositionType: String;
    ContractDuration: Number;
    InterviewPanelString: string;
    SalaryRangeFrom: Number;
    SalaryRangeTo: Number;
    PositionClosureDate: String;
    JobDescription: String;
    constructor() {
      this.BusinessUnitDetails={
        CodeId:"",
        Value:""
      }
      this.PositionNameDetails={
        Code:"",
        Value:""
      }
    }
  }
  