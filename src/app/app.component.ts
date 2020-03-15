import { Component } from '@angular/core';
import { Message } from '@app/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public message: Message;
  public messages: Message[];


  constructor() {
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Welcome to GKMS chat Application..!! How can i help You', 'assets/images/eddy.png', new Date(), 'message', true)
    ];
  }
}
