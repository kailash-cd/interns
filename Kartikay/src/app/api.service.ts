import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = '/api/user/login';

  constructor(private http: HttpClient) {}



  login(credentials: any) {
    return this.http.post(`${this.apiUrl}`, credentials);
  }
}
