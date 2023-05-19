import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createTemplateRequestDto } from './templateRequestDto';
import { CreateCheckRequestDto } from './createCheckRequstDto';
import { ReplyCheckRequestDto } from './ReplyCheckRequestDto';
import { Observable } from 'rxjs';
import { CheckReply } from './check-replies';

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
    return this.http.post<any>(this.apiUrl + '/reply', dto);
  }

  getTemplateForCheckUid(checkUid: string):Observable<createTemplateRequestDto> {
    return this.http.get<createTemplateRequestDto>(this.apiUrl + '/template/' + checkUid);
  }

  getInbox() {
    return this.http.get<CheckReply[]>(this.apiUrl + "/inbox");
  }

  getOutbox() {
    return this.http.get<CheckReply[]>(this.apiUrl + "/outbox");
  }
}
