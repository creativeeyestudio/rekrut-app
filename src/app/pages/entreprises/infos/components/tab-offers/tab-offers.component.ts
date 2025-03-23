import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonLabel, IonButton } from "@ionic/angular/standalone";
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-tab-offers',
  templateUrl: './tab-offers.component.html',
  styleUrls: ['./tab-offers.component.scss'],
  imports: [IonList, IonItem, IonLabel, IonButton]
})
export class TabOffersComponent {

  constructor(public global: GlobalService) { }

}
