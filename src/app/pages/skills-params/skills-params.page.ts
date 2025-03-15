import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonSelect, IonSelectOption, IonItem, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-skills-params',
  templateUrl: './skills-params.page.html',
  styleUrls: ['./skills-params.page.scss'],
  standalone: true,
  imports: [IonButton, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSelect, IonSelectOption, IonItem]
})
export class SkillsParamsPage {

  constructor() { }

}
