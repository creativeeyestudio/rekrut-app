import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonCol, IonGrid, IonRow, IonButton, IonImg, IonInput, IonInputPasswordToggle, IonIcon } from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/services/global.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
    imports: [IonInput, IonInputPasswordToggle, IonImg, IonButton, IonRow, IonGrid, IonCol, IonContent, IonIcon, CommonModule, FormsModule, ReactiveFormsModule]
})
export class RegisterPage implements AfterViewInit {

  userType: 'user' | 'admin' | null = null;
  form: FormGroup;

  constructor(public global: GlobalService, public _fb: FormBuilder) {
    this.form = this._fb.group({
      username: new FormControl(),
      email_user: new FormControl(),
      tel: new FormControl(),
      email_admin: new FormControl(),
      pass: new FormControl(),
    });
  }

  toggleBlock(blockId: string, userType: 'user' | 'admin' | null = null) {
    // Changement d'affichage
    document.querySelectorAll('.block').forEach(block => {
      block.classList.add('ion-hide')
    });

    document.getElementById(blockId)?.classList.remove('ion-hide');

    // Sélection du type de profil
    this.userType = userType;
    this.global.userType = userType;
  }

  goToTutorial() {
    const values = this.form.value;
    const fields = ['username', 'email_user', 'tel', 'email_admin', 'password'];
  
    fields.forEach(field => {
		const value = values[field]?.trim()
		if (value) {
			localStorage.setItem(field, value);
		} else {
			localStorage.removeItem(field);
		}
    });
  
    this.global.navigate('/fr/tutorial');
  }
  

  ngAfterViewInit(): void {
      this.global.isNavHidden = true;
  }
}
