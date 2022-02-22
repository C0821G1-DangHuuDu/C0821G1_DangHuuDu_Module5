import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Student} from '../../../model/student';
import {StudentService} from '../../../service/student.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
 studentEditFom: FormGroup;
  studentEdit: Student;
  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  this.studentEditFom = new FormGroup({
    tenSv: new FormControl(''),
    tenNhom: new FormControl(),
    deTai: new FormControl(),
    gvHuongdan: new FormControl(),
    email: new FormControl(),
    dienThoai: new FormControl()
    }
  );
  }

  ngOnInit(): void {
  }

}
