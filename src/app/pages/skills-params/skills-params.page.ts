import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonSelect, IonSelectOption, IonItem, IonButton, IonToggle, IonInput, IonImg } from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-skills-params',
  templateUrl: './skills-params.page.html',
  styleUrls: ['./skills-params.page.scss'],
  standalone: true,
  imports: [IonImg, IonInput, IonToggle, IonButton, IonList, IonContent, CommonModule, FormsModule, IonSelect, IonSelectOption, IonItem]
})
export class SkillsParamsPage {

  public customQuestion: boolean = false;

  public selectedSkill: string = '';
  public skills: sectorsList[] = [
    {
      name: 'Finance et économie',
      sublist: [
        {name: 'Banque et services financiers'},
        {name: 'Investissement et gestion de patrimoine'},
        {name: 'Comptabilité'},
        {name: 'Assurance'},
        {name: 'Marchés financiers et trading'},
      ]
    },
    {
      name: 'Marketing et Communication',
      sublist: [
        {name: 'Publicité'},
        {name: 'Relations publiques'},
        {name: 'Marketing digital'},
        {name: 'Gestion de marque'},
        {name: 'Stratégie de communication'},
      ]
    },
    {
      name: 'Éducation et Formation',
      sublist: [
        {name: 'Enseignement primaire et secondaire'},
        {name: 'Enseignement supérieur'},
        {name: 'Formation professionnelle et continue'},
        {name: 'E-learning et formation en ligne'},
        {name: 'Éducation spécialisée et soutien scolaire'},
      ]
    }
  ];

  constructor(public global: GlobalService) { }

  goToRecap() {
    this.global.navigate('fr/skills-recap')
  }

  toggleCustomQuestion() : boolean {
    return this.customQuestion = !this.customQuestion;
  }

}

interface sectorsList {
  name: string,
  sublist: {
    name: string
  }[]
}