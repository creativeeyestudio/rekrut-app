import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { chevronBackOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.page.html',
    styleUrls: ['./upload.page.scss'],
    imports: [IonicModule, CommonModule, FormsModule]
})
export class UploadPage {

  newPost: boolean = false;

  domains: Array<string> = [
    'Marketing', 'Ingénierie', 'Ressources humaines'
  ]

  keywords: Array<string> = [
    'Photoshop', 'Python', 'Gestion d\'équipe'
  ]

  togglePost() {
    this.newPost = !this.newPost;
  }

  constructor() {
    addIcons({ chevronBackOutline })
  }

  numbers = Array.from({ length: 9 }, (_, i) => i + 1);

}
