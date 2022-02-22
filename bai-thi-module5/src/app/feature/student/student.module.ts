import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { StudentEditComponent } from './student-edit/student-edit.component';


@NgModule({
  declarations: [StudentListComponent, StudentEditComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
  ]
})
export class StudentModule { }
