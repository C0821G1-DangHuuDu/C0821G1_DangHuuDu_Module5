import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../service/student.service';
import {Router} from '@angular/router';
import {Student} from '../../../model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList: Array<Student> = [
    {id: 1, tenSv: 'du', tenNhom: 'nhom 1', deTai: 'java', gvHuongdan: 'trung dc', email: 'd@gmail.com', dienThoai: '0842102323'}
  ];
  // id delete
  idDelete: number;
  studentDelete: Student;
  // phân trang
  currentPage: number;
  // tìm kiếm
  term: any;

  constructor(private studentService: StudentService,
              private router: Router) {
    this.studentService.findAll().subscribe(value => {
      // this.studentList = value;
      console.log(this.studentList);
    });
  }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.idDelete = id;
    this.studentService.findById(this.idDelete).subscribe(value => {
      this.studentDelete = value;
    }, error => {}, () => {});
  }

  deleteStudent() {
    this.studentService.deleteStudent(this.idDelete).subscribe(value => {
      }, error => {
      },
      () => {
        this.studentService.findAll().subscribe(value => {
          this.studentList = value;
        });
      });
  }
}
