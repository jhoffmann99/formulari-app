import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createTemplateRequestDto } from './templateRequestDto';
import { CreateCheckRequestDto } from './createCheckRequstDto';
import { ReplyCheckRequestDto } from './ReplyCheckRequestDto';
import { Observable } from 'rxjs';
import { CheckReply } from './check-replies';
import { CheckDetails } from './CheckDetails';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CheckService {

  sendReminder(uid: string) {
    return this.http.post<any>(this.apiUrl + '/remind/' + uid, {}, {withCredentials: true});
  }
  private apiUrl = environment.apiUrl + '/check';

  constructor(private http: HttpClient) {}

  createCheck(dto: CreateCheckRequestDto) {
    return this.http.post<any>(this.apiUrl, dto, {withCredentials: true});
  }

  replyCheck(dto: ReplyCheckRequestDto) {
    return this.http.post<any>(this.apiUrl + '/reply', dto, {withCredentials: false});
  }

  getTemplateForCheckUid(checkUid: string):Observable<createTemplateRequestDto> {
    return this.http.get<createTemplateRequestDto>(this.apiUrl + '/template/' + checkUid);
  }

  getInbox() {
    return this.http.get<CheckReply[]>(this.apiUrl + "/inbox", {withCredentials: true});
  }

  getOutbox() {
    return this.http.get<CheckReply[]>(this.apiUrl + "/outbox", {withCredentials: true});
  }

  getArchived() {
    return this.http.get<CheckReply[]>(this.apiUrl + "/archive", {withCredentials: true});
  }

  getCheckDetails(checkId: string): any {
    return this.http.get<CheckDetails>(this.apiUrl + "/details/" + checkId, {withCredentials: false})
  }
}
