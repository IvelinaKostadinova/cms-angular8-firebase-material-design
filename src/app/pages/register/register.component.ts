import { Component, OnInit, ViewChild } from '@angular/core';
import { AfService } from '../../services/af.service';
// import { userInfo } from 'os';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f', { static: false }) contactUsForm: NgForm;

  data: User = new User();
  confirmPassword: string;
  passMatchFlag = false;
  passSixChars = false;
  constructor(private afService: AfService) {}

  ngOnInit() {
    // console.log(this.contactUsForm);
  }

  onConfirmPasswordBlur() {
    if (this.data.password === this.confirmPassword) {
      this.passMatchFlag = true;
    } else {
      this.passMatchFlag = false;
    }
  }

  onPasswordBlur() {
    if (this.data.password.length >= 6) {
      this.passSixChars = true;
    }
  }

  onSignup() {
    this.contactUsForm.controls.name.markAsTouched();
    this.contactUsForm.controls.email.markAsTouched();
    this.contactUsForm.controls.phone.markAsTouched();
    this.contactUsForm.controls.password.markAsTouched();
    this.contactUsForm.controls.passwordconfirm.markAsTouched();

    if (this.contactUsForm.valid && this.passMatchFlag && this.passSixChars) {
      this.afService.signupUser(this.data);
    }
  }
}
