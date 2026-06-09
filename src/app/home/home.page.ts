import { Component } from '@angular/core';
import { IonTitle, IonContent, IonButton, IonItem, IonInput} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonTitle, IonContent,IonButton, IonItem, IonInput, RouterLink],
})
export class HomePage {
  constructor() {}
}
