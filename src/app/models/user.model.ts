export interface IUser {
  uid: string;
  email: string;
  displayName: string;
  phone: string;
  photoURL: string;
  roles: Roles;
  password: string;
}

export class User implements IUser {
  uid: string;
  email: string;
  displayName: string;
  phone: string;
  photoURL: string;
  roles: Roles;
  password: string;

  constructor() {
    this.email = '';
    this.displayName = '';
    this.phone = '';
    this.photoURL = '';
    this.password = '';
  }
}

export interface Roles {
  subscriber?: boolean;
  admin?: boolean;
}
