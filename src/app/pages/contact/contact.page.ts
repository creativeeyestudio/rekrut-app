import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { attachOutline, callOutline, phonePortraitOutline } from 'ionicons/icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContactPage {

  isModalOpen = false;

  constructor() {
    addIcons({ callOutline, attachOutline })
  }

  setOpen(isOpen: boolean) {
    console.log(isOpen);
    this.isModalOpen = isOpen;
  }
}
