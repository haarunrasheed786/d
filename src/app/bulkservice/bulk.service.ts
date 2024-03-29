import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BulkService {
  private baseUrl = 'http://localhost:5000/contacts';

  constructor(private http: HttpClient) { }

  uploadCSV(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.baseUrl}/upload`, formData);
  }
}
