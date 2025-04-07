import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCol, IonGrid, IonRow, IonButton, IonImg, IonInput, IonInputPasswordToggle, IonIcon } from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/services/global.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
    imports: [IonInput, IonInputPasswordToggle, IonImg, IonButton, IonRow, IonGrid, IonCol, IonContent, IonIcon, CommonModule, FormsModule]
})
export class RegisterPage implements AfterViewInit {

  userType: 'user' | 'admin' | null = null;

  constructor(public global: GlobalService) { }

  toggleBlock(blockId: string, userType: 'user' | 'admin' | null = null) {
    // Changement d'affichage
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
      block.classList.add('ion-hide')
    });
    document.getElementById(blockId)?.classList.remove('ion-hide');

    // Sélection du type de profil
    this.userType = userType;
    this.global.userType = userType;
  }



  ngAfterViewInit(): void {
      this.global.isNavHidden = true;
  }

}
