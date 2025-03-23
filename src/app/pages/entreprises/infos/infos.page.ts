import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { bookmarkOutline, chevronBackOutline, chevronForwardOutline, gridOutline, linkOutline, logoFacebook, logoWhatsapp, playCircleOutline, settings, shareSocialOutline } from 'ionicons/icons';
import { GlobalService } from 'src/app/services/global.service';
import { TabOffersComponent } from './components/tab-offers/tab-offers.component';
import { TabVideosComponent } from "./components/tab-videos/tab-videos.component";

@Component({
    selector: 'app-infos',
    templateUrl: './infos.page.html',
    styleUrls: ['./infos.page.scss'],
    imports: [IonicModule, CommonModule, FormsModule, TabOffersComponent, TabVideosComponent]
})
export class InfosPage {

  isShareLinksVisible: boolean = false;

  constructor(public global: GlobalService) {
    addIcons({ bookmarkOutline, gridOutline, chevronForwardOutline, chevronBackOutline, settings, logoFacebook , logoWhatsapp, shareSocialOutline, linkOutline, playCircleOutline })
  }

  toggleShareLinksVisible() {
    this.isShareLinksVisible = !this.isShareLinksVisible
  }

  toggleTab(id: string) {
    const tabs = document.querySelectorAll('.tab');
    const targetTab = document.getElementById(id);

    tabs.forEach((tab) => {
      tab.classList.remove('active')
    });

    targetTab?.classList.add('active');
  }

}
