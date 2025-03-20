import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonRow, IonCol, IonGrid, IonLabel, IonIcon } from "@ionic/angular/standalone";
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-tab-1',
  templateUrl: './tab-1.component.html',
  styleUrls: ['./tab-1.component.scss'],
  imports: [IonIcon, IonLabel, CommonModule, IonRow, IonCol, IonGrid]
})
export class Tab1Component {

  videosLength: number = 1;

  constructor(public global: GlobalService) { }

}
