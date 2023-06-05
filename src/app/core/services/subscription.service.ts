import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  
  private apiUrl = 'http://localhost:3000/subscription';

  constructor(private http: HttpClient) {}

  /* createTemplate(dto: createTemplateRequestDto) {
    return this.http.post<any>(this.apiUrl, dto, {withCredentials: true});
  }
 */
  
  addSubscription(data: any) {
    return this.http.post<any>(this.apiUrl, data, { withCredentials: true });
  }

  getActiveSubscription() {
    return this.http.get<any>(this.apiUrl, {withCredentials: true});
  }

}
