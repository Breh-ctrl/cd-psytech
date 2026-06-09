import { Component } from '@angular/core';
import { IonTitle, IonContent, IonButton, IonItem, IonInput, IonText } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  imports: [IonTitle, IonContent,IonButton, IonItem, IonInput, RouterLink, IonText],
})
export class LoginPage {
  constructor() {}
}
