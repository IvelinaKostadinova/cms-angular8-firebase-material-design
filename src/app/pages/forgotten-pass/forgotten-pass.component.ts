import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AfService } from '../../services/af.service';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-forgotten-pass',
  templateUrl: './forgotten-pass.component.html',
  styleUrls: ['./forgotten-pass.component.scss']
})
export class ForgottenPassComponent implements OnInit {
  user: IUser;
  constructor(public afService: AfService) {}

  ngOnInit() {
    this.afService.user$.subscribe(user => (this.user = user));
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    this.afService.resetPassword(email);
  }
}
