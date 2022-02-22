import { Component } from '@angular/core';
import {Student} from './model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bai-thi-module5';
  studentList: Array<Student> = [
    {id: 1, tenSv: 'du', tenNhom: 'nhom 1', deTai: 'java', gvHuongdan: 'trung dc', email: 'd@gmail.com', dienThoai: '0842102323'}
  ];
}
