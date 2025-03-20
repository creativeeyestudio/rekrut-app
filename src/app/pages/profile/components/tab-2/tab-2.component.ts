import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonGrid, IonLabel, IonIcon, IonCol, IonRow } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tab-2',
  templateUrl: './tab-2.component.html',
  styleUrls: ['./tab-2.component.scss'],
  imports: [IonRow, IonCol, IonGrid, CommonModule]
})
export class Tab2Component {

  constructor() { }

}
