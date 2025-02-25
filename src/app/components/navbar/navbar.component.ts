import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { addIcons } from 'ionicons';
import { addCircleOutline, chatbubblesOutline, homeOutline, notificationsOutline, options, personCircleOutline } from 'ionicons/icons';
import { GlobalService } from 'src/app/services/global.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    imports: [IonicModule]
})
export class NavbarComponent {
  constructor(public global: GlobalService) {
    addIcons({ homeOutline, notificationsOutline, addCircleOutline, chatbubblesOutline, personCircleOutline, options })
  }
}
