import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonSelect, IonSelectOption, IonItem, IonList, IonCheckbox, IonButton } from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-skills-profile',
  templateUrl: './skills-profile.page.html',
  styleUrls: ['./skills-profile.page.scss'],
  standalone: true,
  imports: [IonButton, IonCheckbox, IonList, IonItem, IonContent, IonSelect, IonSelectOption, CommonModule, FormsModule]
})
export class SkillsProfilePage {

  constructor(public global: GlobalService) { }

}
