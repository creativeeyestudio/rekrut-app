import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, GestureController } from '@ionic/angular';
import 'hammerjs';
import { addIcons } from 'ionicons';
import {
  flagOutline,
  heart,
  heartOutline,
  bookmark,
  bookmarkOutline,
  informationCircleOutline,
  sendOutline,
  notificationsOutline,
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

export class HomePage implements AfterViewInit {
  @ViewChildren('cardElement') cardElements!: QueryList<ElementRef>;
  isLiked: boolean = false;

  videos = [
    { id: 1, url: 'assets/videos/video1.mp4', isLiked: false, isSaved: false, isDescPostOpen: false },
    { id: 2, url: 'assets/videos/video2.mp4', isLiked: false, isSaved: false, isDescPostOpen: false },
    { id: 3, url: 'assets/videos/video3.mp4', isLiked: false, isSaved: false, isDescPostOpen: false },
  ];

  alertButtons = ['Contacter', 'Fermer'];

  public cvButtons = [
    {
      text: 'Contacter',
      role: 'contact'
    },
    {
      text: 'Signaler',
      role: 'report'
    }
  ]

  modals: { [key: string]: boolean } = {};

  private pressTimeout: any;

  constructor(
    public global: GlobalService,
    private gestureCtrl: GestureController,
	  private cdr: ChangeDetectorRef
  ) {
    addIcons({
      heart,
      heartOutline,
      bookmark,
      bookmarkOutline,
      informationCircleOutline,
      flagOutline,
      sendOutline,
      notificationsOutline,
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

    this.videos.forEach((video, index) => {
      const el = document.getElementById(`video-${video.id}`);
      if (el) {
        const gesture = this.gestureCtrl.create({
          el,
          gestureName: `long-press-${video.id}`,
          threshold: 0,  // Aucun seuil pour la détection de mouvement
          onStart: () => this.onPressStart(index),
          onEnd: () => this.onPressEnd()
        });

        gesture.enable();
      }
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

  toggleSave(index: number) {
    this.videos[index].isSaved = !this.videos[index].isSaved;
  }

  onPressStart(index: number) {
    // Démarre le timer pour détecter un appui long
    this.pressTimeout = setTimeout(() => {
      this.toggleDescPost(index);
    }, 1000); // 1000 ms = 1 seconde (ajuste à ta convenance)
  }

  onPressEnd() {
    // Annule le timer si l'utilisateur relâche avant 1 seconde
    if (this.pressTimeout) {
      clearTimeout(this.pressTimeout);
    }
  }

  toggleDescPost(index: number) {
    this.videos[index].isDescPostOpen = !this.videos[index].isDescPostOpen;
  }
}
