import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface AccessToken {
  accessToken: string
};

interface FeathersResponse<T> {
  total: number,
  limit: number,
  skip: number,
  data: T[]
};

@Injectable()
export class AuthService {

  private authenticationUrl = 'http://localhost:3030/authentication';
  private usersUrl = 'http://localhost:3030/users';

  isLoggedIn: boolean = false;
  user: User;

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions() {
    const headers = { 'Content-Type': 'application/json' };
    if (window.localStorage.getItem('token')) {
      headers['Authorization'] = window.localStorage.getItem('token');
    }
    return {
      headers: new HttpHeaders(headers)
    };
  }

  async login(user: User): Promise<boolean> {
    try {
      const res = await this.http.post<AccessToken>(this.authenticationUrl, user, this.httpOptions()).toPromise();
      console.log('service login', res);
      const token = res.accessToken;
      window.localStorage.setItem('token', token);
      this.isLoggedIn = true;
      this.user = await this.getUser(user.email);
      console.log(this.user.name);
      return Promise.resolve(true);
    }
    catch (e) {
      return Promise.resolve(false);
    }
  }

  getUser(email: string): Promise<User> {
    return this.http.get<FeathersResponse<User>>(this.usersUrl + `?email=${email}`, this.httpOptions())
      .map(response => response.data[0])
      .toPromise();
  }
}
