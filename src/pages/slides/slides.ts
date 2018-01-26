import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';

import { LayoutComponent } from '../../components/layout/layout.component';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToSlide() {
    this.slides.slideNext(500);
  }
  openDemo() {
    console.info("openDemo");
    this.navCtrl.push(LayoutComponent);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }

}
