import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonSelect, IonSelectOption, IonItem, IonButton, IonToggle, IonInput } from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-skills-params',
  templateUrl: './skills-params.page.html',
  styleUrls: ['./skills-params.page.scss'],
  standalone: true,
  imports: [IonInput, IonToggle, IonButton, IonList, IonContent, CommonModule, FormsModule, IonSelect, IonSelectOption, IonItem]
})
export class SkillsParamsPage {

  public customQuestion: boolean = false;

  constructor(public global: GlobalService) { }

  goToRecap() {
    this.global.navigate('fr/skills-recap')
  }

  toggleCustomQuestion() : boolean {
    return this.customQuestion = !this.customQuestion;
  }

}
