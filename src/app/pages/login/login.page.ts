import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonImg, IonIcon, IonInput, IonInputPasswordToggle, IonButton } from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonIcon, IonImg, IonContent, IonInputPasswordToggle, CommonModule, FormsModule]
})
export class LoginPage  {

  constructor(public global: GlobalService) { }

}
