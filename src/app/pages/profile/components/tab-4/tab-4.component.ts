import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonGrid, IonCol, IonRow } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tab-4',
  templateUrl: './tab-4.component.html',
  styleUrls: ['./tab-4.component.scss'],
  imports: [IonRow, IonCol, IonGrid, CommonModule]
})
export class Tab4Component {

  constructor() { }

}
