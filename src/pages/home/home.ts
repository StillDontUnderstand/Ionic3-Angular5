import { Component } from '@angular/core';


@Component({
  template:`

  <ion-header>
  <ion-navbar>
  <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
  </button>
  <ion-title>Home</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
<devlog></devlog>
    </ion-content>
  `,
})
export class HomePage {


}
