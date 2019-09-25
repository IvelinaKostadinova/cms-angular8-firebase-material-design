import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { AfService } from '../../../services/af.service';
//import { MenusService } from '../../services/menus/menus.service';
import { IUser } from '../../../models/user.model';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../../../services/window.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  user$: Observable<IUser>;
  user: IUser;
  menusList: any;
  public navIsFixed = false;

  constructor(
    public afService: AfService,
    //private menus: MenusService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
    this.user$ = this.afService.user$;
    // this.afService.user$.subscribe(x =>  {
    //   if (x) {
    //     this.user = x[0];
    //     // console.log(x);
    //   }
    // });
    // this.menus.getMenus().subscribe( menus => {
    //   this.menusList = menus;
    // });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number > 50) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
  }

  scrollToBottom() {
    // console.log('Scrolltobottom');
    let oldpos = -1;
    const scrollToBottom = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos !== oldpos) {
        oldpos = pos;
        window.scrollTo(0, window.pageYOffset + 20);
      } else {
        window.clearInterval(scrollToBottom);
      }
    }, 16);
  }
}
