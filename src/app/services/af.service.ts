import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { AngularFireAuth } from 'angularfire2/auth';
//import { AngularFirestore } from 'angularfire2/firestore';
import { Observable} from 'rxjs';
import { IUser, User } from '../models/user.model';
//import { MessageService } from '@app/service/message.service';
//import { UserService } from '@app/service/fb-base.service';

@Injectable()
export class AfService {

  user$: Observable<IUser>;
  token: string;

  constructor(
      //public afAuth: AngularFireAuth,
      //public afs: AngularFirestore,
      private router: Router,
      //private messageService: MessageService,
      //private userService: UserService
  ) {
      // this.user$ = afAuth.authState
      //   .switchMap(user => {
      //     // console.log(user);
      //     if (user) {
      //       return this.userService.getConditionalItems('uid', '==', user.uid);
      //       // return this.afs.doc<IUser>(`users/${user.uid}`).valueChanges();
      //     } else {
      //       return Observable.of(null);
      //     }
      //   });
  }

  signupUser(user: User) {
    // return new Promise<any>((resolve, reject) => {
    //   this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    //   .then( res => {
    //     resolve(res);
    //     user.uid = res.uid;
    //     this.updateUser(user);
    //     this.afAuth.auth.currentUser.sendEmailVerification();
    //     this.messageService.openGreenMessage('An email was sent to ' + user.email + '. Please verify your email before login.');
    //     // this.logout(false, true);
    //     this.router.navigate(['/']);
    //   }, err => {
    //     reject(err);
    //   });
    // }
  //);
  }

  resetPassword(email: string) {
    // return new Promise<any>((resolve, reject) => {
    // this.afAuth.auth.sendPasswordResetEmail(email)
    // .then( res => {
    //   this.messageService.openGreenMessage('An email was sent to this address: ' + email);
    //   this.router.navigate(['/']);
    // })
    // .catch();
    // }
    // );
  }

  loginWithGoogle() {
    // const provider = this.afAuth.auth.GoogleAuthProvider();
    // this.afAuth.auth.signInWithPopup(provider).then((credential) => {
    //   this.updateUser(credential.user);
    //   // TO DO: needs token when implementing
    // });
  }

  loginEmailPassword(email: string, password: string) {
    // this.afAuth.auth.signInWithEmailAndPassword(email, password)
    // .then(
    //   response => {
    //     if (this.afAuth.auth.currentUser.emailVerified) {
    //       // this.updateUser(response);
    //       this.afAuth.auth.currentUser.getIdToken()
    //         .then(
    //           (token: string) => this.token = token
    //       );
    //       this.messageService.openGreenMessage('Welcome ' + this.afAuth.auth.currentUser.email);
    //       this.router.navigate(['/']);
    //     } else {
    //       this.messageService.openGreenMessage('Please verify ' + this.afAuth.auth.currentUser.email + ' before login.');
    //       this.logout(false, false);
    //     }
    //   }
    // )
    // .catch(
    //     error => {
    //       this.messageService.openGreenMessage('Invalid username or password!');
    //     //  console.log(error);
    //     }
    //   );
  }

  updateUser(user) {
    // const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: IUser = {
      uid: user.uid,
      email: user.email,
      phone: user.phone,
      displayName: user.displayName,
      photoURL: user.photoURL,
      password: user.password,
      roles: {
        subscriber: true,
        admin: false
      }
    };
    // return userRef.set(data, {merge: true});
    //this.userService.addItem(data);
  }

  isAuth() {
    return this.token != null;
  }

  logout(showGoodbye: boolean, returnHome: boolean) {
    // if (showGoodbye) {
    //   this.messageService.openGreenMessage('Goodbye ' + this.afAuth.auth.currentUser.email);
    // }
    // this.afAuth.auth.signOut();
    // // this.afAuth.auth.signOut();
    // this.token = null;
    // if (returnHome) {
    //   this.router.navigate(['/']);
    // }
    // this.user$ = null;
  }
}
