import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, IonButton, IonImg, IonInput, IonInputPasswordToggle, IonItem, IonIcon } from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/services/global.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
    imports: [IonInput, IonInputPasswordToggle, IonImg, IonButton, IonRow, IonGrid, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, CommonModule, FormsModule]
})
export class RegisterPage {

  userType: 'student' | 'recruter' | null = null;

  constructor(public global: GlobalService) { }

  toggleBlock(blockId: string, userType: 'student' | 'recruter' | null = null) {
    // Changement d'affichage
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
      block.classList.add('ion-hide')
    });
    document.getElementById(blockId)?.classList.remove('ion-hide');

    // Sélection du type de profil

    this.userType = userType;
  }

}
