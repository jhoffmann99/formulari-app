import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createTemplateRequestDto } from './createTemplateRequestDto';
import { CreateCheckRequestDto } from './createCheckRequstDto';
import { ReplyCheckRequestDto } from './ReplyCheckRequestDto';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  private apiUrl = 'http://localhost:3000/check';

  constructor(private http: HttpClient) { }

  createCheck(dto: CreateCheckRequestDto) {
    return this.http.post<any>(this.apiUrl, dto);
  }

  replyCheck(dto: ReplyCheckRequestDto) {
    return this.http.post<any>(this.apiUrl + '/reply', dto);
  }
}
