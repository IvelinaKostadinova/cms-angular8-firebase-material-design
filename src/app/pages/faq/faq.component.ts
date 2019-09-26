import { Component, OnInit } from '@angular/core';
//import { FaqService } from '../../../service/fb-base.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqs: any;
  //constructor(private faqService: FaqService) {}

  ngOnInit() {
    //this.faqService.getItems().subscribe((data: any) => {
    //  this.faqs = data;
    //});
  }
}
