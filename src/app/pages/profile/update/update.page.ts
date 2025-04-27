import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

@Component({
    selector: 'app-update',
    templateUrl: './update.page.html',
    styleUrls: ['./update.page.scss'],
    imports: [CommonModule, FormsModule, IonicModule]
})
export class UpdatePage {

  constructor(public global: GlobalService) { }

  public submitForm() {
    this.global.navigate('/profile');
  }

}
