import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { flagOutline, heartOutline, informationCircleOutline, sendOutline } from 'ionicons/icons';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit() {
    addIcons({heartOutline, informationCircleOutline, flagOutline, sendOutline})
  }

}
