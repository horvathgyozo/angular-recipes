import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  user: User;

  constructor() { }

}
