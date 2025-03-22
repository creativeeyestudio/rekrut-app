import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public isNavHidden: boolean = false;
  public userType: 'student' | 'recruiter' | null = 'recruiter';

  constructor(public router: Router, public nav: NavController) { }

  navigate(link: string, direction: "forward" | "back" = 'forward') {
    this.nav.setDirection(direction);
    this.router.navigateByUrl(link)
  }

  goBack() {
    this.nav.back()
  }
}
