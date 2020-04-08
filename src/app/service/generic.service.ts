import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  constructor(private http: HttpClient) { }

  add(path: string, object: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + path, object);
  }

  getAll(path: string): Observable<any> {
    return this.http.get<any>(environment.apiUrl + path);
  }

  getOne(path: string, object: any): Observable<any> {
    return this.http.post(environment.apiUrl + path, object);
  }
}
