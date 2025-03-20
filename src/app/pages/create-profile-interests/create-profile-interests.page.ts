import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonGrid, IonRow, IonCol, IonButton, IonCheckbox, IonInput, IonSelect, IonSelectOption, IonList, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';

@Component({
  selector: 'app-create-profile-interests',
  templateUrl: './create-profile-interests.page.html',
  styleUrls: ['./create-profile-interests.page.scss'],
  standalone: true,
  imports: [IonLabel, IonIcon, IonList, IonInput, IonCheckbox, IonButton, IonCol, IonRow, IonGrid, IonItem, IonContent, IonSelect, IonSelectOption, CommonModule, FormsModule]
})
export class CreateProfileInterestsPage {

  constructor() {
    addIcons({addOutline})
  }

}
