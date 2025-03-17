import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from "@ionic/angular";
import { addIcons } from 'ionicons';
import { addCircleOutline, chatboxEllipsesOutline, chatboxEllipsesSharp, chatbubblesOutline, homeOutline, homeSharp, optionsOutline, optionsSharp, personCircleOutline, search } from 'ionicons/icons';
import { GlobalService } from 'src/app/services/global.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    imports: [IonicModule, CommonModule]
})
export class NavbarComponent {
  constructor(public global: GlobalService, public router: Router) {
    addIcons({ homeOutline, homeSharp, search, optionsOutline, optionsSharp, chatboxEllipsesOutline, chatboxEllipsesSharp, addCircleOutline, chatbubblesOutline, personCircleOutline })
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

  toggleDarkMode(): boolean {
    return this.router.url === '/fr';
  }
}
