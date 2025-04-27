import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
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
export class TutorialPage implements OnInit, AfterViewInit {
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

  tutoRecrutBlocks = [
    {
      id: 0,
      visible: true,
      title: 'Bienvenue sur Rekrut !',
      desc: 'Rekrut est le premier réseau social dédié au recrutement instantané, conçu pour vous aider à repérer votre prochaine recrue instantanément.',
      image: 'tuto-0.png',
    },
    {
      id: 1,
      visible: false,
      title: 'Créez votre profil entreprise',
      desc: `Renseignez les informations clés sur votre structure : nom, secteur, taille et numéro Siren.`,
      image: 'tuto-1.png',
    },
    {
      id: 2,
      visible: false,
      title: 'Publiez vos offres',
      desc: "Décrivez le poste à pourvoir : secteur, type de contrat, période, niveau recherché, compétences, valeurs attendues… Vous pouvez aussi choisir une question à poser au candidat lorsqu’ils enregistreront leur vidéo.",
      image: 'tuto-2.png',
    },
    {
      id: 3,
      visible: false,
      title: "Ajoutez votre vidéo d’entreprise (optionel)",
      desc: "Présentez le poste mis en avant lors de la vidéo : l’équipe, l’ambiance de travail ou les attentes du poste. Cela rendra votre annonce plus humaine et attirera davantage de candidatures pertinentes.",
      image: 'tuto-6.png',
    },
    {
      id: 4,
      visible: false,
      title: "Découvrez les candidats en vidéo",
      desc: "Grâce à l’algorithme de matching, vous verrez directement des profils vidéo en lien avec votre offre et les critères que vous avez choisis.",
      image: 'tuto-7.png',
    },
    {
      id: 5,
      visible: false,
      title: "Matchez, échangez et recrutez",
      desc: "Swipez, sélectionnez, planifiez un entretien ou échangez directement via l’app. Rekrut simplifie la mise en relation pour que le bon profil vous trouve en un scroll, ou inversement.",
      image: 'tuto-8.png',
    },
  ];

  constructor(public global: GlobalService) { }

  ngOnInit() {
    console.log(localStorage);
  }

  goToTheNext() {
    if (this.tutoPos < this.tutoBlocks.length - 1) {
      this.tutoBlocks[this.tutoPos].visible = false;
      this.tutoPos++;
      this.tutoBlocks[this.tutoPos].visible = true;
    } else {
      this.global.navigate('fr/create-profile');
    }
  }

  goToTheNextRecruiter() {
    if (this.tutoPos < this.tutoRecrutBlocks.length - 1) {
      this.tutoRecrutBlocks[this.tutoPos].visible = false;
      this.tutoPos++;
      this.tutoRecrutBlocks[this.tutoPos].visible = true;
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
