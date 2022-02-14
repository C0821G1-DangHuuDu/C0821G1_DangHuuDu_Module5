import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  name: string;
  gender: number;
  point: number;
  @Output() editNStudent = new EventEmitter<Student>();
  constructor() { }

  ngOnInit(): void {
  }

  editStudent() {
    this.editNStudent.emit({
      name : this.name,
      gender: Number (this.gender),
      point: this.point
    });
  }
}
