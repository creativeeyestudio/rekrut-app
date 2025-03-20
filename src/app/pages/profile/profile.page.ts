import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

import { addIcons } from 'ionicons';
import { addCircleOutline, bookmarkOutline, cameraOutline, chevronBackOutline, heartOutline, lockClosedOutline, settingsOutline } from 'ionicons/icons';
import { Tab1Component } from "./components/tab-1/tab-1.component";
import { Tab2Component } from './components/tab-2/tab-2.component';
import { Tab3Component } from "./components/tab-3/tab-3.component";
import { Tab4Component } from "./components/tab-4/tab-4.component";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
    imports: [IonicModule, CommonModule, FormsModule, Tab1Component, Tab2Component, Tab3Component, Tab4Component]
})
export class ProfilePage  {

  constructor(public global: GlobalService) {
    addIcons({ settingsOutline, chevronBackOutline, addCircleOutline, cameraOutline, lockClosedOutline, bookmarkOutline, heartOutline });
  }

}
