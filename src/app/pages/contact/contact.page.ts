import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { attachOutline, callOutline, paperPlaneOutline, phonePortraitOutline } from 'ionicons/icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContactPage {
  
  constructor() {
    addIcons({ callOutline, attachOutline, paperPlaneOutline })
  }
  
  openFileDialog = () => {
    (document as any).querySelector('#upload-file').click();
  }

  setImages = (_event: any) => {
    let f = _event.target.files;
  }
}
