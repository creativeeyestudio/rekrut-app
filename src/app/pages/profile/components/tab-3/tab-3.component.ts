import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonGrid, IonCol, IonRow } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tab-3',
  templateUrl: './tab-3.component.html',
  styleUrls: ['./tab-3.component.scss'],
  imports: [IonRow, IonCol, IonGrid, CommonModule]
})
export class Tab3Component {

  constructor() { }

}
