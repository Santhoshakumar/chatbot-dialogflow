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
      new Message('Bonjour Théophile, merci d\'avoir acheté une offre chez Orange. Je suis Eddy, je suis à votre service pour vous aider à suivre votre commande.', 'assets/images/eddy.png', new Date(), 'message', true)
    ];
  }
}
