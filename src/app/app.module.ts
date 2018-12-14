import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CandidateComponent } from './candidate/candidate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { InterviewComponent } from './interview/interview.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {RequisitionService} from './services/requisition.service';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    DashboardComponent,
    RequisitionComponent,
    InterviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule ,
    MatSelectModule
  ],
  providers: [RequisitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
