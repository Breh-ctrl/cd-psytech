import { Component } from '@angular/core';
import { MenuController, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { IonIcon } from '@ionic/angular/standalone'; 
import { addIcons } from 'ionicons';
import { homeOutline, searchOutline, calendarOutline } from 'ionicons/icons';
const iconeMedicoSvg = `
<svg xmlns="http://w3.org" viewBox="0 0 512 512">
  <path fill="currentColor" d="M256 256c61.8 0 112-50.2 112-112S317.8 32 256 32 144 82.2 144 144s50.2 112 112 112zm0 32c-70.7 0-224 35.8-224 106.7V448h448v-53.3c0-70.9-153.3-106.7-224-106.7z"/>
</svg>
`;
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule,
    RouterLink,
  ],
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  constructor(
    private menuCtrl: MenuController,
    private router: Router
  ) {

    addIcons({ 
      'home-outline': homeOutline, 
      'search': searchOutline,      
      'calendar': calendarOutline,     
    });
  }

  async irPara(pagina: string) {
    await this.menuCtrl.close();
    this.router.navigateByUrl('/suporte');
  }

}
