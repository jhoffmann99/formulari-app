import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { INotification } from '../models/INotification';
import { NotificationType } from '../models/NotificationType';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notification$: Subject<INotification> = new BehaviorSubject(null);

  success(message: string, duration: number = null) {
    this.notify(message, NotificationType.Success, duration);
  }
  warning(message: string, duration: number = null) {
    this.notify(message, NotificationType.Warning, duration);
  }
  error(message: string, duration: number = null) {
    this.notify(message, NotificationType.Error, duration);
  }
  private notify(message: string, type: NotificationType, duration: number) {
    duration = !duration ? 3000 : duration;
    this.notification$.next({
      message: message,
      type: type,
      duration: duration,
    } as INotification);
  }
  get notification() {
    return this.notification$.asObservable();
  }
}