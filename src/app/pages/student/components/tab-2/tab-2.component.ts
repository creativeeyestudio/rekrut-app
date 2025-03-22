import { Component } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonImg } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tab-2',
  templateUrl: './tab-2.component.html',
  styleUrls: ['./tab-2.component.scss'],
  imports: [IonImg, IonRow, IonCol, IonGrid]
})
export class Tab2Component {

  constructor() { }

}
