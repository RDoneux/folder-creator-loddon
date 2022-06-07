import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameInputComponent } from './candidate-list/name-input/name-input.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { AdditionalInformationComponent } from './additional-information/additional-information.component';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { SideNavComponent } from './surround/side-nav/side-nav.component';
import { LogComponent } from './log/log.component';
import { SurroundComponent } from './surround/surround.component';
import { TopBarComponent } from './surround/top-bar/top-bar.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingModalComponent } from './settings/setting-modal/setting-modal.component';
import { AddCourseProfileModalComponent } from './settings/add-course-profile-modal/add-course-profile-modal.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { CourseWorkflowCardComponent } from './workflow/course-workflow-card/course-workflow-card.component';
import { PriorityIconComponent } from './workflow/course-workflow-card/priority-icon/priority-icon.component';
import { DeadlineCountdownComponent } from './workflow/course-workflow-card/deadline-countdown/deadline-countdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModalComponent } from './workflow/course-workflow-card/card-modal/card-modal.component';
import { WorkflowProgressComponent } from './workflow/course-workflow-card/card-modal/workflow-progress/workflow-progress.component';
import { FeatureRequiredComponent } from './feature-required/feature-required.component';
import { AssignedTagComponent } from './workflow/course-workflow-card/card-modal/assigned-tag/assigned-tag.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserIconComponent } from './user-management/user-icon/user-icon.component';
import { ModalComponent } from './modal/modal.component';
import { CommentComponent } from './workflow/course-workflow-card/card-modal/comment/comment.component';
import { DatePipe } from '@angular/common';
// import { ColorPickerModule } from 'ngx-color-picker';

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
    CardModalComponent,
    WorkflowProgressComponent,
    FeatureRequiredComponent,
    AssignedTagComponent,
    UserManagementComponent,
    UserIconComponent,
    ModalComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule,
    BrowserAnimationsModule,
  ],
  providers: [CookieService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
