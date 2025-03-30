import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { attachOutline, callOutline, chevronBackOutline, paperPlaneOutline, videocamOutline } from 'ionicons/icons';
import { GlobalService } from 'src/app/services/global.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.page.html',
    styleUrls: ['./contact.page.scss'],
    imports: [IonicModule, CommonModule, FormsModule]
})
export class ContactPage implements OnInit {
  
  constructor(public global: GlobalService) {
    addIcons({ callOutline, attachOutline, paperPlaneOutline, chevronBackOutline, videocamOutline })
  }

  ngOnInit(): void {
      this.global.isNavHidden = true;
  }
  
  openFileDialog = () => {
    (document as any).querySelector('#upload-file').click();
  }

  setImages = (_event: any) => {
    let f = _event.target.files;
  }

  goBack() {
    this.global.isNavHidden = false;
    this.global.goBack();
  }
}
