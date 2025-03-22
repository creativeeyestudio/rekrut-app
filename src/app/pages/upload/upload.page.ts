import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { chevronBackOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { GlobalService } from 'src/app/services/global.service';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.page.html',
    styleUrls: ['./upload.page.scss'],
    imports: [IonicModule, CommonModule, FormsModule]
})
export class UploadPage {

  newPost: boolean = false;
  numbers = Array.from({ length: 9 }, (_, i) => i + 1);

  domains: Array<string> = [
    'Marketing', 'Ingénierie', 'Ressources humaines'
  ]

  keywords: Array<string> = [
    'Photoshop', 'Python', 'Gestion d\'équipe'
  ]

  constructor(public global: GlobalService) {
    addIcons({ chevronBackOutline })
  }

  togglePost() {
    this.newPost = !this.newPost;
  }

}
