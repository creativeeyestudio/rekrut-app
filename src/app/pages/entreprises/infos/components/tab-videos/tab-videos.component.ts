import { Component } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonImg } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tab-videos',
  templateUrl: './tab-videos.component.html',
  styleUrls: ['./tab-videos.component.scss'],
  imports: [IonImg, IonCol, IonRow, IonGrid]
})
export class TabVideosComponent  {

  constructor() { }

}
