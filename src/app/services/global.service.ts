import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(public router: Router, public nav: NavController) { }

  navigate(link: string) {
    this.router.navigate([link])
  }

  goBack() {
    this.nav.back()
  }
}
