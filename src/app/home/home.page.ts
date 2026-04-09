import { Component } from '@angular/core';
import { IonTitle, IonContent, IonButton, IonItem, IonInput, IonInputPasswordToggle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonTitle, IonContent,IonButton, IonItem, IonInput, IonInputPasswordToggle],
})
export class HomePage {
  constructor() {}
}
