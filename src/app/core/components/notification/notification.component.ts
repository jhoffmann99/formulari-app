import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { takeWhile } from 'rxjs';
import { INotification } from '../../models/INotification';
import { NotificationType } from '../../models/NotificationType';
import { NotificationService } from '../../services/notification.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  @ViewChild('notificationContainer') container: ElementRef<HTMLDivElement>;

  private _subscribed: boolean = true;
  private classMap: Map<NotificationType, string>;

  constructor(
    private service: NotificationService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.classMap = new Map<NotificationType, string>();
    this.classMap.set(NotificationType.Success, 'alert-success');
    this.classMap.set(NotificationType.Warning, 'alert-warning');
    this.classMap.set(NotificationType.Error, 'alert-danger');

    this.service.notification
      .pipe(takeWhile(() => this._subscribed))
      .subscribe((notification) => {
        if (notification) this.render(notification);
      });
  }

  ngOnDestroy() {
    this._subscribed = false;
  }

  private render(notification: INotification) {
    let notificationBox = this.renderer.createElement('div');
    let content = this.renderer.createElement('div');
    const boxColorClass = this.classMap.get(notification.type);
    let classesToAdd = ['alert', boxColorClass];
    classesToAdd.forEach((x) => this.renderer.addClass(notificationBox, x));
    this.renderer.setStyle(
      notificationBox,
      'transition',
      `opacity ${notification.duration}ms`
    );
    this.renderer.setStyle(notificationBox, 'opacity', '1');

    const text = this.renderer.createText(notification.message);
    this.renderer.appendChild(content, text);
    this.renderer.appendChild(this.container.nativeElement, notificationBox);

    this.renderer.appendChild(notificationBox, content);
    setTimeout(() => {
      this.renderer.setStyle(notificationBox, 'opacity', '0');
      setTimeout(() => {
        this.renderer.removeChild(
          this.container.nativeElement,
          notificationBox
        );
      }, notification.duration);
    }, notification.duration);
  }
}