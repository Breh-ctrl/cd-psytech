import { Component } from '@angular/core';
import { IonTitle, IonContent, IonButton, IonItem, IonInput, IonInputPasswordToggle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  imports: [IonTitle, IonContent,IonButton, IonItem, IonInput, IonInputPasswordToggle],
})
export class LoginPage {
  constructor() {}
}
