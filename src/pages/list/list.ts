import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-list',
  template: `
    <ion-header>
      <ion-navbar>
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>List</ion-title>
      </ion-navbar>
    </ion-header>
    
    <ion-content>
      <ion-list>
        <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">
          <ion-icon [name]="item.icon" item-start></ion-icon>
          {{item.title}}
          <div class="item-note" item-end>
            {{item.note}}
          </div>
        </button>
      </ion-list>
      <div *ngIf="selectedItem" padding>
        You navigated here from <b>{{selectedItem.title}}</b>
      </div>
    </ion-content>
  `
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
console.info('list page')