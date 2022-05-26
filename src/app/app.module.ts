import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameInputComponent } from './name-input/name-input.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { AdditionalInformationComponent } from './additional-information/additional-information.component';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LogComponent } from './log/log.component';
import { SurroundComponent } from './surround/surround.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingModalComponent } from './setting-modal/setting-modal.component';
import { AddCourseProfileModalComponent } from './add-course-profile-modal/add-course-profile-modal.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { CourseWorkflowCardComponent } from './workflow/course-workflow-card/course-workflow-card.component';
import { PriorityIconComponent } from './workflow/course-workflow-card/priority-icon/priority-icon.component';
import { DeadlineCountdownComponent } from './workflow/course-workflow-card/deadline-countdown/deadline-countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    NameInputComponent,
    CandidateListComponent,
    AdditionalInformationComponent,
    AlertComponent,
    SideNavComponent,
    LogComponent,
    SurroundComponent,
    TopBarComponent,
    SettingsComponent,
    SettingModalComponent,
    AddCourseProfileModalComponent,
    WorkflowComponent,
    CourseWorkflowCardComponent,
    PriorityIconComponent,
    DeadlineCountdownComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
