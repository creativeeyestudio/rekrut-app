import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';
import { chevronBackOutline, heartOutline, send } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.page.html',
  styleUrls: ['./offres.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OffresPage {

  constructor(public global: GlobalService) {
    addIcons({ send, heartOutline })
  }

}
