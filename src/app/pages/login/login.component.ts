import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AfService } from '../../services/af.service';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: IUser;
  passwordCorrect = true;
  constructor(
    public afService: AfService
    ) { }

  ngOnInit() {
    this.afService.user$.subscribe(user => this.user = user);
  }
  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.afService.loginEmailPassword(email, password);
    this.passwordCorrect = false;
  }
}
