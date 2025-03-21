import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonList, IonInput, IonSelect, IonSelectOption, IonCheckbox, IonButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { PhoneIndicatorService } from 'src/app/services/phone-indicator.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonButton, IonCheckbox, IonInput, IonList, IonItem, IonContent, IonSelect, IonSelectOption, CommonModule, FormsModule]
})
export class CreateProfilePage {

  constructor(public phoneList: PhoneIndicatorService) { }

}
