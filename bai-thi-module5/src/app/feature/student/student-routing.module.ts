import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentEditComponent} from './student-edit/student-edit.component';


const routes: Routes = [
  {path: 'list', component: StudentListComponent},
  {path: 'edit/:id', component: StudentEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class StudentRoutingModule { }
