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
      title: 'Bienvenue sur Rekrut !',
      desc: 'Rekrut est le premier réseau social gratuit dédié au recrutement instantané, conçu pour t’aider à décrocher une expérience professionnelle rapidement.',
      image: 'tuto-0.png',
    },
    {
      id: 1,
      visible: false,
      title: 'Crée ton profil',
      desc: `Complète ton profil, définis qui tu es en renseignant la page ADN Professionnel et joins ton CV texte pour attirer l’attention des recruteurs.<br /><br />Pas de stress : tes données sont sécurisées, et ton profil ne sera vu que par les recruteurs.`,
      image: 'tuto-1.png',
    },
    {
      id: 2,
      visible: false,
      title: 'Enregistre ta vidéo',
      desc: "Tu devras répondre à une question pratique et aléatoire en moins d’une minute.<br /><br /> Ferme l’application, enregistre ta vidéo  puis upload-la comme décrit dans la vidéo ci-dessus.",
      image: 'tuto-3.png',
    },
    {
      id: 3,
      visible: false,
      title: "C'est tout bon",
      desc: "Ta vidéo et ton ADN professionnel seront triés par notre algorithme.<br /><br />Attends seulement que les recruteurs te contactent et n’oublie pas d’activer les notifications pour être au courant des derniers matchs.",
      image: 'tuto-4.png',
    },
    {
      id: 4,
      visible: false,
      title: "L’application est encore en développement",
      desc: "Nous sommes en train d’améliorer l’application. N’hésitez pas à nous faire vos retours sur votre expérience. ",
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

  goToRegister() {
    this.global.navigate('fr/create-profile');
  }

  ngAfterViewInit(): void {
    this.global.isNavHidden = true;
  }
}
