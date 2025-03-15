import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-skills-recap',
  templateUrl: './skills-recap.page.html',
  styleUrls: ['./skills-recap.page.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SkillsRecapPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
