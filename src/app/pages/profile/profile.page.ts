import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
} from '@angular/core';
import Swiper from 'swiper';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

import { addIcons } from 'ionicons';
import {
  addCircleOutline,
  bookmarkOutline,
  cameraOutline,
  chevronBackOutline,
  heartOutline,
  linkOutline,
  playCircleOutline,
  logoFacebook,
  logoWhatsapp,
  settingsOutline,
  shareSocialOutline,
  lockClosedOutline,
} from 'ionicons/icons';
import { Tab1Component } from './components/tab-1/tab-1.component';
import { Tab2Component } from './components/tab-2/tab-2.component';
import { Tab3Component } from './components/tab-3/tab-3.component';
import { Tab4Component } from './components/tab-4/tab-4.component';

import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1Component,
    Tab2Component,
    Tab3Component,
    Tab4Component,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfilePage implements AfterViewInit {
  @ViewChild('swiperRef', { static: false }) swiperRef: any;
  swiper!: Swiper;
  isShareLinksVisible: boolean = false;

  constructor(public global: GlobalService) {
    addIcons({
      settingsOutline,
      chevronBackOutline,
      addCircleOutline,
      cameraOutline,
      playCircleOutline,
      bookmarkOutline,
      heartOutline,
      logoFacebook,
      logoWhatsapp,
      shareSocialOutline,
      linkOutline,
      lockClosedOutline,
    });
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
    }
  }

  toggleShareLinksVisible() {
    this.isShareLinksVisible = !this.isShareLinksVisible;
  }
}
