import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { CreatStudentComponent } from './create-student/creat-student.component';
import {FormsModule} from '@angular/forms';
import { EditStudentComponent } from './edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    DetailStudentComponent,
    CreatStudentComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
