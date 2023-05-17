import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createTemplateRequestDto } from './templateRequestDto';
import { CreateCheckRequestDto } from './createCheckRequstDto';
import { ReplyCheckRequestDto } from './ReplyCheckRequestDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckService {
  private apiUrl = 'http://localhost:3000/check';

  constructor(private http: HttpClient) {}

  createCheck(dto: CreateCheckRequestDto) {
    return this.http.post<any>(this.apiUrl, dto, {withCredentials: true});
  }

  replyCheck(dto: ReplyCheckRequestDto) {
    return this.http.post<any>(this.apiUrl + '/reply', dto, {withCredentials: true});
  }

  getTemplateForCheckUid(checkUid: string):Observable<createTemplateRequestDto> {
    return this.http.get<createTemplateRequestDto>(this.apiUrl + '/template/' + checkUid, {withCredentials: true});
  }
}
