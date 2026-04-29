import { Component } from '@angular/core';
import { IonTitle, IonContent, IonButton, IonItem, IonInput} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { IonTabs } from '@ionic/angular/standalone';
import { IonTabBar,IonIcon, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  imports: [IonTitle, IonContent,IonButton, IonItem, IonInput, RouterLink, IonTabs, IonTabBar, IonIcon, IonLabel  ],
})
export class LoginPage {
  constructor() {}
}
