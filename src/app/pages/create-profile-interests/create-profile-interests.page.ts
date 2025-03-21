import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonGrid, IonRow, IonCol, IonButton, IonCheckbox, IonSelect, IonSelectOption, IonList, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';

@Component({
  selector: 'app-create-profile-interests',
  templateUrl: './create-profile-interests.page.html',
  styleUrls: ['./create-profile-interests.page.scss'],
  standalone: true,
  imports: [IonIcon, IonList, IonCheckbox, IonButton, IonCol, IonRow, IonGrid, IonItem, IonContent, IonSelect, IonSelectOption, CommonModule, FormsModule]
})
export class CreateProfileInterestsPage {

  constructor() {
    addIcons({addOutline})
  }

}
