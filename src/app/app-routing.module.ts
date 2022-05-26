import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { SettingsComponent } from './settings/settings.component';
import { WorkflowComponent } from './workflow/workflow.component';

const routes: Routes = [
  {path: '', redirectTo: 'create-course', pathMatch: 'full'},
  {path: 'create-course', component: CandidateListComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'workflows', component: WorkflowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
