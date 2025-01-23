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

  isModalOpen = false;
  numbers = Array.from({ length: 9 }, (_, i) => i + 1);
  selectedImages: string[] = []; // Tableau pour stocker les images sélectionnées

  constructor() {
    addIcons({ callOutline, attachOutline, paperPlaneOutline })
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  toggleImageSelection(imageUrl: string) {
    const index = this.selectedImages.indexOf(imageUrl);
    if (index > -1) {
      // Si l'image est déjà sélectionnée, on la retire
      this.selectedImages.splice(index, 1);
    } else {
      // Sinon, on l'ajoute
      this.selectedImages.push(imageUrl);
    }
  }

  isSelected(imageUrl: string): boolean {
    return this.selectedImages.includes(imageUrl);
  }
}
