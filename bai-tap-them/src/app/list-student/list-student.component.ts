import {Component, OnInit} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  constructor() {
  }

  public students: Array<Student>;
  studentSend: Student;
  ngOnInit(): void {
    this.students = [
      {name: 'Du', gender: 1, point: 7},
      {name: 'Bao', gender: 1, point: 8},
      {name: 'Vy', gender: 0, point: 9}
    ];
  }

  sendSdutent(student: Student) {
   this.studentSend = student;
  }

  createNewStudent(value: Student) {
    this.students.push(value);
  }


  editStudent(value: Student) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.students.length; i++){
      if (value.name === this.students[i].name){
        this.students[i] = value;
        break;
      }
    }

  }
}
