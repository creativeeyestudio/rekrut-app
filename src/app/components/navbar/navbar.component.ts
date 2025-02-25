import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { addIcons } from 'ionicons';
import { addCircleOutline, chatbox, chatboxEllipsesSharp, chatbubblesOutline, homeOutline, notificationsOutline, options, personCircleOutline, search } from 'ionicons/icons';
import { GlobalService } from 'src/app/services/global.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    imports: [IonicModule]
})
export class NavbarComponent {
  constructor(public global: GlobalService) {
    addIcons({ homeOutline, search, options, chatboxEllipsesSharp, addCircleOutline, chatbubblesOutline, personCircleOutline })
  }
}
