import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL = environment.API_URL;

  constructor(private http: HttpClient){}

  getInformation():Observable<any>{
    return this.http.get(`${this.baseURL}/information`)
  }
  getMenu():Observable<any>{
    return this.http.get(`${this.baseURL}/menu`)
  }
  getProjects():Observable<any>{
    return this.http.get(`${this.baseURL}/projects`)
  }
  getSkills():Observable<any>{
    return this.http.get(`${this.baseURL}/skills`)
  }
}
