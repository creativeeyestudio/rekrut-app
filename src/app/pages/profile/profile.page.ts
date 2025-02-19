import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

import { addIcons } from 'ionicons';
import { chevronBackOutline, logoIonic, settingsOutline } from 'ionicons/icons';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
    imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfilePage implements OnInit {

  constructor(public globalService: GlobalService) {
    addIcons({ logoIonic, settingsOutline, chevronBackOutline });
  }

  ngOnInit() {
  }

}
