import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronForwardOutline } from 'ionicons/icons';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.page.html',
  styleUrls: ['./messagerie.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, CommonModule, FormsModule]
})
export class MessageriePage {

  constructor(public global: GlobalService) {
      addIcons({
        chevronForwardOutline
      })
    }

}
