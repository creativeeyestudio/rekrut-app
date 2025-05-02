import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonGrid, IonRow, IonCol, IonButton, IonCheckbox, IonSelect, IonSelectOption, IonList, IonListHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';
import { GlobalService } from 'src/app/services/global.service';
import { createClient } from '@supabase/supabase-js'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-profile-interests',
  templateUrl: './create-profile-interests.page.html',
  styleUrls: ['./create-profile-interests.page.scss'],
  standalone: true,
  imports: [IonList, IonCheckbox, IonButton, IonCol, IonRow, IonGrid, IonItem, IonContent, IonSelect, IonSelectOption, CommonModule, FormsModule]
})
export class CreateProfileInterestsPage {

  softSkills: string[] = ['Autonome', 'Esprit d\'équipe', 'Innovant', 'Amélioratif', 'Dirigeant', 'Leadership'];
  workStyleSkills: string[] = ['Télétravail', 'Présentiel', 'Structuré', 'Flexible', 'Travail intense', 'Rythme équilibré'];
  valuesSkills: string[] = ['Inclusion', 'Solidarité', 'Égalité', 'Bienveillance', 'Justice', 'Partage', 'Persévérance', 'Ambition', 'Créativité', 'Innovation', 'Éthique', 'Passion', 'Stabilité', 'Audace', 'Exigence', 'Excellence', 'Curiosité', 'Optimisme', 'Proactivité', 'Intégrité', 'Discrétion', 'Polyvalence', 'Discipline', 'Vision', 'Indépendance', 'Loyauté', 'Réalisme', 'Esprit critique', 'Esprit entrepreneurial'];

  constructor(public global: GlobalService) {
    addIcons({ addOutline });
  }

  goToHome() {
    this.global.isNavHidden = false;
    this.global.navigate('fr')
  }

  async createUser() {
    const supabase = createClient(environment.supabaseUrl, environment.supabaseKey)

    let { data, error } = await supabase
      .from('users')
      .insert([{
        email: localStorage.getItem('email_user'),
        password_hash: localStorage.getItem('password'),
        first_name: localStorage.getItem('first_name'),
        last_name: localStorage.getItem('last_name'),
        role: 'user'
      }])
      .select();
  }
}
