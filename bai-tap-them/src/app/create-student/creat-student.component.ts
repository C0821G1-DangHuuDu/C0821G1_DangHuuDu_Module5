import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-creat-student',
  templateUrl: './creat-student.component.html',
  styleUrls: ['./creat-student.component.css']
})
export class CreatStudentComponent implements OnInit {
  name: string;
  gender: number;
  point: number;

  @Output() createStudents = new EventEmitter<Student>();
  constructor() { }

  ngOnInit(): void {
  }

  createStudent() {
  this.createStudents.emit({
    name: this.name,
    gender: this.gender,
    point: this.point
  });
  }
}
