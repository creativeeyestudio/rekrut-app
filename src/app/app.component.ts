import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { IonicModule, AnimationController, createAnimation } from '@ionic/angular';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    imports: [IonicModule, RouterModule, NavbarComponent]
})
export class AppComponent {
  constructor(
    private animationCtrl: AnimationController
  ) {}

  routeAnimation = (baseEl: HTMLElement, opts?: any) => {
    const leavingEl = opts?.leavingEl;
    const enteringEl = opts?.enteringEl;

    if (!enteringEl || !leavingEl) {
      return createAnimation().duration(0); // Animation vide si aucune page à animer
    }

    const enterAnimation = createAnimation()
      .addElement(enteringEl)
      .fromTo('transform', 'translateX(100%)', 'translateX(0%)');

    const leaveAnimation = createAnimation()
      .addElement(leavingEl)
      .fromTo('transform', 'translateX(0%)', 'translateX(-100%)');

    const animation = this.animationCtrl
      .create()
      .duration(300)
      .easing('ease-in-out')
      .addAnimation([enterAnimation, leaveAnimation]);

    return animation;
  };
}
