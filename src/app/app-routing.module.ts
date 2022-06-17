import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugReportComponent } from './bug-report/bug-report.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { FeatureRequiredComponent } from './feature-required/feature-required.component';
import { SettingsComponent } from './settings/settings.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { WorkflowComponent } from './workflow/workflow.component';

const routes: Routes = [
  { path: '', redirectTo: 'create-course', pathMatch: 'full' },
  { path: 'create-course', component: CandidateListComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'workflows', component: WorkflowComponent },
  { path: 'users', component: UserManagementComponent },
  { path: 'no-feature', component: FeatureRequiredComponent },
  { path: 'bug-report', component: BugReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
