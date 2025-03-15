import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

import { addIcons } from 'ionicons';
import { addCircleOutline, cameraOutline, chevronBackOutline, logoIonic, settingsOutline } from 'ionicons/icons';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
    imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfilePage  {

  videosLength: number = 0;

  constructor(public global: GlobalService) {
    addIcons({ logoIonic, settingsOutline, chevronBackOutline, addCircleOutline, cameraOutline });
  }

}
