import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
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
    this.navCtrl.push('LayoutComponent');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }

}
console.info('slides page')