import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonList,
  IonItem,
  IonListHeader,
  IonButton,
  IonImg,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronBackSharp,
  createOutline,
  optionsOutline,
  settingsOutline,
  notificationsOutline,
  shieldCheckmarkOutline,
  helpCircleOutline,
} from 'ionicons/icons';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.page.html',
  styleUrls: ['./parameters.page.scss'],
  standalone: true,
  imports: [
    IonImg,
    IonButton,
    IonListHeader,
    IonItem,
    IonList,
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class ParametersPage implements OnInit {
  constructor(public global: GlobalService) {
    addIcons({
      chevronBackSharp,
      createOutline,
      optionsOutline,
      settingsOutline,
      notificationsOutline,
      shieldCheckmarkOutline,
      helpCircleOutline,
    });
  }

  ngOnInit(): void {
    this.global.isNavHidden = true;
  }

  goBack() {
    this.global.isNavHidden = false;
    this.global.goBack();
  }
}
