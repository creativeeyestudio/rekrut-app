import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonItem, IonList, IonInput, IonSelect, IonSelectOption, IonCheckbox, IonButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { PhoneIndicatorService } from 'src/app/services/phone-indicator.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonButton, IonCheckbox, IonInput, IonList, IonItem, IonContent, IonSelect, IonSelectOption, CommonModule, FormsModule, ReactiveFormsModule]
})
export class CreateProfilePage {

  form: FormGroup;

  constructor(public global: GlobalService, public phoneList: PhoneIndicatorService, public _fb: FormBuilder) {
    this.form = _fb.group({
      first_name: '',
      last_name: '',
      year: '',
      email: localStorage.getItem('email_user'),
      phone: ''
    })
  }

  initUserData() {
    const values = this.form.value
    localStorage.setItem('first_name', values.first_name)
    localStorage.setItem('last_name', values.last_name)
    localStorage.setItem('year', values.year)
    localStorage.setItem('phone', values.phone)
  }

  createUser() {
    this.initUserData()
    console.log(localStorage)
  }

  goToNext() {
    this.global.navigate(
      this.global.userType === 'user' ? 'fr/create-profile-interests' : 'fr'
    );
    
    if (this.global.userType !== 'user') this.global.isNavHidden = false;
  }  

}
