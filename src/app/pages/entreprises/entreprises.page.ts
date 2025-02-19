import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronForwardOutline } from 'ionicons/icons';
import { GlobalService } from 'src/app/services/global.service';

@Component({
    selector: 'app-entreprises',
    templateUrl: './entreprises.page.html',
    styleUrls: ['./entreprises.page.scss'],
    imports: [IonicModule, CommonModule, FormsModule]
})
export class EntreprisesPage implements OnInit {

  constructor(public global: GlobalService) {
    addIcons({
      chevronForwardOutline
    })
  }

  ngOnInit() {
  }

}
