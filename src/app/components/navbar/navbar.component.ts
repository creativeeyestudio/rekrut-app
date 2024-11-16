import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { addIcons } from 'ionicons';
import { addCircleOutline, chatbubblesOutline, homeOutline, notificationsOutline, personCircleOutline } from 'ionicons/icons';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class NavbarComponent  implements OnInit {

  constructor(public global: GlobalService) {
    addIcons({ homeOutline, notificationsOutline, addCircleOutline, chatbubblesOutline, personCircleOutline })
  }

  ngOnInit() {}

}
