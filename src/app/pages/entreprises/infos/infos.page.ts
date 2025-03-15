import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { bookmark, bookmarkOutline, chevronBackOutline, chevronForwardOutline, gridOutline, settings } from 'ionicons/icons';
import { GlobalService } from 'src/app/services/global.service';

@Component({
    selector: 'app-infos',
    templateUrl: './infos.page.html',
    styleUrls: ['./infos.page.scss'],
    imports: [IonicModule, CommonModule, FormsModule]
})
export class InfosPage {

  constructor(public global: GlobalService) {
    addIcons({ bookmarkOutline, gridOutline, chevronForwardOutline, chevronBackOutline, settings })
  }

}
