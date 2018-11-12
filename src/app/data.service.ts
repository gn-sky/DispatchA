import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl: string = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  getUsers() {
    const url = `${this.apiUrl}/trucks`;    
    return this.http.get(url);
  }
}
