import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonImg } from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
  standalone: true,
  imports: [IonImg, IonButton, IonContent, CommonModule, FormsModule],
})
export class TutorialPage implements AfterViewInit {
  @ViewChildren('tutoElement') tutoElements!: QueryList<ElementRef>;

  tutoPos: number = 0;

  tutoBlocks = [
    {
      id: 0,
      visible: true,
      title: 'Crée et complète ton profil',
      desc: 'Complète ton profil et ajoute ton CV pour attirer l’attention des recruteurs.',
      image: 'tuto-1.png',
    },
    {
      id: 1,
      visible: false,
      title: 'Postule aux offres qui te correspondent',
      desc: 'Après avoir cliqué sur "Uploader la vidéo skill", tu devras choisir un secteur et un niveau de difficulté. Une question choisie par le recruteur pourra t\'être ensuite posée.',
      image: 'tuto-2.png',
    },
    {
      id: 2,
      visible: false,
      title: 'Réponds à la question en vidéo',
      desc: "Ferme l’application, enregistre ta vidéo (moins de une minute) en répondant à la question, puis upload-la sur l'application.",
      image: 'tuto-3.png',
    },
    {
      id: 3,
      visible: false,
      title: "C'est tout bon",
      desc: "Attends que les recruteurs te contactent et n'oublie pas d'activer les notifications pour être au courant des derniers matchs.",
      image: 'tuto-4.png',
    },
    {
      id: 3,
      visible: false,
      title: "L'application est encore en développement",
      desc: "Nous sommes en train d'améliorer l'application. N'hésitez pas à nous faire vos retours sur votre expérience.",
      image: 'tuto-5.png',
    },
  ];

  constructor(public global: GlobalService) {}

  goToTheNext() {
    if (this.tutoPos < this.tutoBlocks.length - 1) {
      this.tutoBlocks[this.tutoPos].visible = false;
      this.tutoPos++;
      this.tutoBlocks[this.tutoPos].visible = true;
    } else {
      this.global.navigate('fr/create-profile');
    }
  }

  goToHome() {
    this.global.isNavHidden = false;
    this.global.navigate('fr');
  }

  ngAfterViewInit(): void {
    this.global.isNavHidden = true;
  }
}
