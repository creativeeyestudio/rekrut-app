import { Component } from '@angular/core';
import { IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tab-1',
  templateUrl: './tab-1.component.html',
  styleUrls: ['./tab-1.component.scss'],
  imports: [IonRow, IonCol, IonGrid]
})
export class Tab1Component {

  constructor() { }

}
