import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { bookmarkOutline, chevronBackOutline, chevronForwardOutline, gridOutline, linkOutline, logoFacebook, logoWhatsapp, playCircleOutline, settings, shareSocialOutline } from 'ionicons/icons';
import { GlobalService } from 'src/app/services/global.service';
import { TabOffersComponent } from './components/tab-offers/tab-offers.component';
import { TabVideosComponent } from "./components/tab-videos/tab-videos.component";

import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();

@Component({
    selector: 'app-infos',
    templateUrl: './infos.page.html',
    styleUrls: ['./infos.page.scss'],
    imports: [IonicModule, CommonModule, FormsModule, TabOffersComponent, TabVideosComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InfosPage implements AfterViewInit {
  @ViewChild('swiperRef', { static: false }) swiperRef: any;
  swiper!: Swiper;
  isShareLinksVisible: boolean = false;
  activeSlideIndex: number = 0;

  constructor(public global: GlobalService) {
    addIcons({ bookmarkOutline, gridOutline, chevronForwardOutline, chevronBackOutline, settings, logoFacebook , logoWhatsapp, shareSocialOutline, linkOutline, playCircleOutline })
  }

  ngAfterViewInit() {
    // Attendre un petit délai pour être sûr que Swiper est bien attaché
    setTimeout(() => {
      if (this.swiperRef?.nativeElement?.swiper) {
        this.swiper = this.swiperRef.nativeElement.swiper;
      } else {
        console.error("Swiper n'a pas pu être initialisé.");
      }
    }, 100);
  }

  goToSlide(index: number) {
    if (this.swiper) {
      this.swiper.slideTo(index);
      this.activeSlideIndex = index;
    }
  }

  toggleShareLinksVisible() {
    this.isShareLinksVisible = !this.isShareLinksVisible
  }

}
