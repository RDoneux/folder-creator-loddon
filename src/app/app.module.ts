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

@NgModule({
  declarations: [
    AppComponent,
    NameInputComponent,
    CandidateListComponent,
    AdditionalInformationComponent,
    AlertComponent,
    SideNavComponent,
    LogComponent,
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
