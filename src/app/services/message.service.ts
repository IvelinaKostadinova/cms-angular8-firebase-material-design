import { Injectable, NgZone, Component } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'info-snackbar',
  template:
    '<span style="background-color: orange; color:black"><mat-icon>account_circle</mat-icon> Warning: {{warningContent}}</span>'
})
export class WarningSnackbarComponent {
  warningContent: any;
}

@Injectable()
export class MessageService {
  config = new MatSnackBarConfig();
  constructor(public snackBar: MatSnackBar, private zone: NgZone) {
    // green-class lives in styles.css
    this.config.panelClass = ['green-class'];
    this.config.duration = 8000;
  }

  openGreenMessage(message: string, action = '') {
    this.zone.run(() => {
      this.snackBar.open(message, action, this.config);
    });
  }

  openWarning(message: string) {
    this.zone.run(() => {
      const snackbarRef = this.snackBar.openFromComponent(WarningSnackbarComponent, this.config);
      snackbarRef.instance.warningContent = message;
    });
  }
}
