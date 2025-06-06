import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor() { }

  apiUrl = environment.authUrl;
  #http: HttpClient = inject(HttpClient);

  login(credentials: any): Observable<any> {
    return this.#http.post(this.apiUrl + '/login', credentials, {
      withCredentials: true
    });
  }
}
