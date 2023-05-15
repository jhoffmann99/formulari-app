import { Component } from '@angular/core';
import { CheckService } from '../../core/services/check.service';
import { ReplyCheckRequestDto } from '../../core/services/ReplyCheckRequestDto';

@Component({
  selector: 'app-reply-check',
  templateUrl: './reply-check.component.html',
  styleUrls: ['./reply-check.component.scss']
})
export class ReplyCheckComponent {

  constructor(private checkService: CheckService) {}

  replyCheck() {
    const dto: ReplyCheckRequestDto = {
        "uid": "8b56decf-bc5a-411c-bec7-7752b38615ac",
        "data": [
            {
                "name": "vorname",
                "type": "TEXT",
                "value": "Jürgen"
            },
            {
                "name": "Brutto-Jahresgehalt in Euro",
                "type": "NUMBER",
                "value": 70000
            }
        ]
    }

    this.checkService.replyCheck(dto).subscribe(data => {console.log(data)});    
  }
}
