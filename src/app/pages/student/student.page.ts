import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonGrid, IonRow, IonCol, IonItem, IonImg, IonLabel, IonThumbnail, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bookmarkOutline, heartOutline, lockClosedOutline } from 'ionicons/icons';
import { Tab1Component } from "./components/tab-1/tab-1.component";
import { Tab2Component } from "./components/tab-2/tab-2.component";
import { Tab3Component } from "./components/tab-3/tab-3.component";
import { Tab4Component } from "./components/tab-4/tab-4.component";

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonLabel, IonThumbnail, IonImg, IonItem, IonCol, IonRow, IonGrid, IonContent, CommonModule, FormsModule, Tab1Component, Tab2Component, Tab3Component, Tab4Component]
})
export class StudentPage {

  constructor() {
    addIcons({lockClosedOutline,bookmarkOutline,heartOutline});
  }

  changeTab(tabId: string) {
    // Retrait des onglets actifs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) => {
      tab.classList.remove('active')
    })

    // Affichage de l'onglet sélectionné
    const tab = document.getElementById(tabId);
    tab?.classList.add('active');

    console.log("Called");
  }

}
