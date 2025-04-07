import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonImg,
  IonLabel,
  IonThumbnail,
  IonButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  bookmarkOutline,
  heartOutline,
  lockClosedOutline, playCircleOutline } from 'ionicons/icons';
import { Tab1Component } from './components/tab-1/tab-1.component';
import { Tab2Component } from './components/tab-2/tab-2.component';
import { Tab3Component } from './components/tab-3/tab-3.component';
import { Tab4Component } from './components/tab-4/tab-4.component';

import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonLabel,
    IonThumbnail,
    IonImg,
    IonItem,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    CommonModule,
    FormsModule,
    Tab1Component,
    Tab2Component,
    Tab3Component,
    Tab4Component,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StudentPage implements AfterViewInit{
  @ViewChild('swiperRef', { static: false }) swiperRef: any;
  swiper!: Swiper;
  isShareLinksVisible: boolean = false;
  activeSlideIndex: number = 0;
  
  constructor() {
    addIcons({playCircleOutline,lockClosedOutline,bookmarkOutline,heartOutline});
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
}
