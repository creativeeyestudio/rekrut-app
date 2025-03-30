import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonGrid, IonLabel, IonIcon, IonCol, IonRow } from "@ionic/angular/standalone";
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-tab-2',
  templateUrl: './tab-2.component.html',
  styleUrls: ['./tab-2.component.scss'],
  imports: [IonRow, IonIcon, IonCol, IonGrid, CommonModule]
})
export class Tab2Component {

  constructor(public global: GlobalService) { }

}
