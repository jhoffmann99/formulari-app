import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  
  private apiUrl = environment.apiUrl + '/subscription';

  constructor(private http: HttpClient) {}
  
  addSubscription(data: any) {
    return this.http.post<any>(this.apiUrl, data, { withCredentials: true });
  }

  getActiveSubscription() {
    return this.http.get<any>(this.apiUrl, {withCredentials: true});
  }

}
