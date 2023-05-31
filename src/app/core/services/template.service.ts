import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createTemplateRequestDto } from './templateRequestDto';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {

  private apiUrl = 'http://localhost:3000/template';

  constructor(private http: HttpClient) {}

  createTemplate(dto: createTemplateRequestDto) {
    return this.http.post<any>(this.apiUrl, dto, {withCredentials: true});
  }

  findAll() {
    return this.http.get<any>(this.apiUrl, {withCredentials: true});
  }

  delete(uid: string) {
    return this.http.delete<any>(this.apiUrl + '/' + uid, {withCredentials: true});
  }
}
