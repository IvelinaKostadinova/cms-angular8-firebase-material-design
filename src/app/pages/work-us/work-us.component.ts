import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { ContactUsService } from '../../../service/fb-base.service';
import { Router } from '@angular/router';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-work-us',
  templateUrl: './work-us.component.html',
  styleUrls: ['./work-us.component.scss']
})
export class WorkUsComponent implements OnInit {
  @ViewChild('f', { static: false }) contactUsForm: NgForm;

  contactSource: string;
  constructor(
    //private contactUsService: ContactUsService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.contactSource = 'work with us';
  }

  onSend() {
    //this.contactUsService.addItem(this.contactUsForm.value);
    this.messageService.openGreenMessage('Thank you for your message!');
    this.contactUsForm.resetForm();
    this.router.navigate(['/']);
  }
}
