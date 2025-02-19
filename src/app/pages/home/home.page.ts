import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, GestureController } from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  flagOutline,
  heart,
  heartOutline,
  informationCircleOutline,
  sendOutline,
} from 'ionicons/icons';
import { GlobalService } from 'src/app/services/global.service';

import { register } from 'swiper/element/bundle';
register();

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {
  @ViewChildren('cardElement') cardElements!: QueryList<ElementRef>;
  isLiked: boolean = false;

  videos = [
    { id: 1, url: 'assets/videos/video1.mp4', isLiked: false },
    { id: 2, url: 'assets/videos/video2.mp4', isLiked: false },
    { id: 3, url: 'assets/videos/video3.mp4', isLiked: false },
  ];

  alertButtons = ['Contacter', 'Fermer'];

  modals: { [key: string]: boolean } = {};

  constructor(
    public global: GlobalService,
    private gestureCtrl: GestureController,
	private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    addIcons({
      heart,
      heartOutline,
      informationCircleOutline,
      flagOutline,
      sendOutline,
    });
  }

  ngAfterViewInit() {
    this.cardElements.forEach((card, index) => {
      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        gestureName: 'swipe',
        onMove: (ev) => this.onMove(ev, card.nativeElement),
        onEnd: (ev) => this.onEnd(ev, card.nativeElement, index),
      });
      gesture.enable();
    });
  }

  onMove(ev: any, card: HTMLElement) {
    card.style.transform = `translate(${ev.deltaX}px, ${ev.deltaY}px) rotate(${
      ev.deltaX / 10
    }deg)`;
  }

  onEnd(ev: any, card: HTMLElement, index: number) {
    if (ev.deltaX > 150) {
      this.swipeRight(card, index);
    } else if (ev.deltaX < -150) {
      this.swipeLeft(card, index);
    } else {
      card.style.transform = ''; // Reset si le swipe est insuffisant
    }
  }

  swipeRight(card: HTMLElement, index: number) {
    card.style.transform = 'translate(1000px, 0) rotate(20deg)';
    card.style.opacity = '0';
    setTimeout(() => this.removeCard(index), 300);
    console.log('Swiped Right!', this.videos[index]);
  }

  swipeLeft(card: HTMLElement, index: number) {
    card.style.transform = 'translate(-1000px, 0) rotate(-20deg)';
    card.style.opacity = '0';
    setTimeout(() => this.removeCard(index), 300);
    console.log('Swiped Left!', this.videos[index]);
  }

  removeCard(index: number) {
    this.videos.splice(index, 1);
  }

  toggleLike(index: number) {
    this.videos[index].isLiked = !this.videos[index].isLiked;
  }
}
