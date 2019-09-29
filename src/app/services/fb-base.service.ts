import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
//import { IService } from '../models/services.model';
//import { IContactUs } from '../models/contact-us.model';
//import { IFaq } from '../models/faq.model';
//import { ICourierSpecs } from '../models/courier/courier-specs.model';
//import { ICourierBooking } from '../models/courier/courier-booking.model';
//import { IRemovalSpecs } from '../models/removal/removal-specs.model';
//import { IRemovalBooking } from '../models/removal/removal-booking.model';
import { IUser } from '../../app/models/user.model';
//import { IVanCalendar } from '@app/models/van-calendar.model';

@Injectable()
export class FbBaseService<T> {
  private collection: string;

  constructor(public afs: AngularFirestore, private childCollection: string) {
    this.collection = childCollection;
  }

  getItems() {
    return this.afs
      .collection(this.collection)
      .snapshotChanges()
      .pipe(
        map(courier => {
          return courier.map(a => {
            const data = a.payload.doc.data() as T;
            const id = a.payload.doc.id;
            return { id, ...(data as {}) };
          });
        })
      );
  }

  getConditionalItems(field: string, condition: any, value: string) {
    return this.afs
      .collection(this.childCollection, ref => ref.where(field, condition, value))
      .snapshotChanges()
      .pipe(
        map(courier => {
          return courier.map(a => {
            const data = a.payload.doc.data() as T;
            const id = a.payload.doc.id;
            return { id, ...(data as {}) };
          });
        })
      );
  }

  addItem(courierBooking: T) {
    this.afs.collection<T>(this.collection).add(Object.assign({}, courierBooking));
  }

  deleteItem(courierBookingId) {
    this.afs.doc(this.collection + '/' + courierBookingId).delete();
  }

  updateItem(courierBookingId, courierBooking: T) {
    this.afs.doc(this.collection + '/' + courierBookingId).update(courierBooking);
  }
}

//@Injectable()
//export class ServicesService extends FbBaseService<IService> {
//  constructor(public afs: AngularFirestore) {
//    super(afs, 'services');
//  }
//}
//
//@Injectable()
//export class ContactUsService extends FbBaseService<IContactUs> {
//  constructor(public afs: AngularFirestore) {
//    super(afs, 'contactus');
//  }
//}
//
//@Injectable()
//export class FaqService extends FbBaseService<IFaq> {
//  constructor(public afs: AngularFirestore) {
//    super(afs, 'faq');
//  }
//}
//
//@Injectable()
//export class CourierSpecService extends FbBaseService<ICourierSpecs> {
//  constructor(public afs: AngularFirestore) {
//    super(afs, 'couriers');
//  }
//}
//
//@Injectable()
//export class CourierBookingService extends FbBaseService<ICourierBooking> {
//  constructor(public afs: AngularFirestore) {
//    super(afs, 'courier-bookings');
//  }
//
//  getItems() {
//    return this.afs
//      .collection('courier-bookings')
//      .snapshotChanges()
//      .map(courier => {
//        return courier.map(a => {
//          const data = a.payload.doc.data() as ICourierBooking;
//          // TO DO FOR ALL REPOS -> add id:string to the intercaces
//          data.id = a.payload.doc.id;
//          return data;
//        });
//      });
//  }
//}
//
//@Injectable()
//export class RemovalSpecService extends FbBaseService<IRemovalSpecs> {
//  constructor(public afs: AngularFirestore) {
//    super(afs, 'removals');
//  }
//}
//
//@Injectable()
//export class RemovalBookingService extends FbBaseService<IRemovalBooking> {
//  constructor(public afs: AngularFirestore) {
//    super(afs, 'removal-bookings');
//  }
//}

@Injectable()
export class UserService extends FbBaseService<IUser> {
  constructor(public afs: AngularFirestore) {
    super(afs, 'users');
  }
}

//@Injectable()
//export class VanCalendarService extends FbBaseService<IVanCalendar> {
//  constructor(public afs: AngularFirestore) {
//    super(afs, 'van-calendars');
//  }
//
//  getItems() {
//    return this.afs
//      .collection('van-calendars')
//      .snapshotChanges()
//      .map(courier => {
//        return courier.map(a => {
//          const data = a.payload.doc.data() as IVanCalendar;
//          // TO DO FOR ALL REPOS
//          data.id = a.payload.doc.id;
//          return data;
//        });
//      });
//  }
//}
