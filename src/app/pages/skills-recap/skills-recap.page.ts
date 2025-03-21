import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonItem, IonButton } from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-skills-recap',
  templateUrl: './skills-recap.page.html',
  styleUrls: ['./skills-recap.page.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonList, IonContent, CommonModule, FormsModule]
})
export class SkillsRecapPage {

  constructor(public global: GlobalService) { }

}
