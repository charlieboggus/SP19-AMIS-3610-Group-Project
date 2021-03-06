import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  submitForm(json: string) {
    return this.http.post< any >('https://pdfbox-api.azurewebsites.net/api/contact/submit', json, this.httpOptions);
  }
}
