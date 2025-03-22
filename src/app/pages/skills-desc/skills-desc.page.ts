import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonSelect, IonSelectOption, IonItem, IonIcon, IonList, IonInput, IonTextarea, IonCheckbox, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-skills-desc',
  templateUrl: './skills-desc.page.html',
  styleUrls: ['./skills-desc.page.scss'],
  standalone: true,
  imports: [IonButton, IonCheckbox, IonTextarea, IonList, IonIcon, IonItem, IonContent, IonSelect, IonSelectOption, CommonModule, FormsModule]
})
export class SkillsDescPage {

  constructor(public global: GlobalService) {
    addIcons({chevronBackOutline});
  }

}
