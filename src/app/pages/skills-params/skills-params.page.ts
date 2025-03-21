import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonSelect, IonSelectOption, IonItem, IonButton } from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-skills-params',
  templateUrl: './skills-params.page.html',
  styleUrls: ['./skills-params.page.scss'],
  standalone: true,
  imports: [IonButton, IonList, IonContent, CommonModule, FormsModule, IonSelect, IonSelectOption, IonItem]
})
export class SkillsParamsPage {

  constructor(public global: GlobalService) { }

  goToRecap() {
    this.global.navigate('fr/skills-recap')
  }

}
