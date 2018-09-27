import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@app/models';
import { DialogflowService } from '@app/services';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  public message: Message;

  @Input('messages')
  public messages: Message[];

  constructor(private dialogFlowService: DialogflowService) { }

  ngOnInit() {
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.message.type = 'message';
    this.message.bot = false;
    this.messages.push(this.message);

    this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
      let image;
      console.log('custom json undefined is : ' + image);
      const payload = res.result.fulfillment.messages[0].payload;
      if (payload !== undefined) {
        image = res.result.fulfillment.messages[0].payload.contentUrl;
      }
      console.log('custom json with url is : ' + image);
      if (image !== undefined) {
        this.messages.push(
          new Message(image, 'assets/images/eddy.png', res.timestamp, 'image', true)
        );
      } else {
        console.log('size : ' + res.result.fulfillment.messages);
        res.result.fulfillment.messages.forEach(element => {
          this.messages.push(
            new Message(element.speech, 'assets/images/eddy.png', res.timestamp, 'message', true)
          );
        });
      }
    });

    this.message = new Message('', 'assets/images/user.png');
  }

}
