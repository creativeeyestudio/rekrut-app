import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { GlobalService } from 'src/app/services/global.service';

@Component({
    selector: 'app-offre',
    templateUrl: './offre.page.html',
    styleUrls: ['./offre.page.scss'],
    imports: [IonicModule, CommonModule, FormsModule]
})
export class OffrePage implements OnInit {

  constructor(public global: GlobalService) {
    addIcons({ chevronBackOutline })
  }

  ngOnInit() {
  }

}
