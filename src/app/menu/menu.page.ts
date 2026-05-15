import { Component } from '@angular/core';
import { MenuController, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ],
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  constructor(
    private menuCtrl: MenuController,
    private router: Router
  ) {}

  async irPara(pagina: string) {
    await this.menuCtrl.close();

    // 👇 IMPORTANTE: se estiver usando TABS
    this.router.navigateByUrl('/tabs/' + pagina);
  }

}