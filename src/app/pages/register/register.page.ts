import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, IonButton, IonImg, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonInput, IonImg, IonButton, IonRow, IonGrid, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleBlock(blockId: string) {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
      block.classList.add('ion-hide')
    });
    document.getElementById(blockId)?.classList.remove('ion-hide');
  }

}
