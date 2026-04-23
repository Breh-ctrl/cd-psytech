import { Component } from '@angular/core';
import { IonTitle, IonContent, IonButton, IonItem, IonInput} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  imports: [IonTitle, IonContent,IonButton, IonItem, IonInput, RouterLink],
})
export class LoginPage {
  constructor() {}
}
