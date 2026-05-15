import { Component } from '@angular/core';
import { IonTitle, IonContent, IonButton, IonItem, IonInput, IonHeader, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-suporte',
  templateUrl: 'suporte.page.html',
  styleUrls: ['suporte.page.scss'],
  standalone: true,
  imports: [
    IonTitle,
    IonContent,
    IonButton,
    IonItem,
    IonInput,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    RouterLink
  ],
})
export class SuportePage {
  constructor() {}
}