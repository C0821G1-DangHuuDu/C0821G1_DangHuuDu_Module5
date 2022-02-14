import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      passwordConfirm: new FormControl('', [Validators.minLength(6), Validators.required, this.checkPassword]),
      country: new FormControl(Validators.required),
      age: new FormControl('', [Validators.required, this.check18]),
      gender: new FormControl(),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
    });
  }

  ngOnInit(): void {
  }

  getInfoRegister() {
    console.log(this.registerForm.value);
  }

  checkPassword(abstractControl: AbstractControl): any {
    return abstractControl.value === this.registerForm.value.password ? null : {checkPass: true};
    console.log(abstractControl.value);
    // console.log(this.registerForm.value.password);
  }

  check18(abstractControl: AbstractControl): any {
    return Number(abstractControl.value) > 18 ? null : {checkAge: true};
  }


}
