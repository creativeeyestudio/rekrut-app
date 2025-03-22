import { Component } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonImg } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tab-3',
  templateUrl: './tab-3.component.html',
  styleUrls: ['./tab-3.component.scss'],
  imports: [IonImg, IonRow, IonCol, IonGrid]
})
export class Tab3Component {

  constructor() { }

}
