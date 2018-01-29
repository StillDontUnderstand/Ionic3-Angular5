import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController,
  AlertController,
  ItemSliding,
  reorderArray
} from 'ionic-angular';



/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  myDate;
  items = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController) {

      for (let x = 0; x < 5; x++) {
        this.items.push(x);
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }
  presentActionSheet() {
    console.info('aaa')
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
  share(slidingItem: ItemSliding) {
    slidingItem.close();
  }
  archive(){}
  reorderItems(indexes) {
    // let element = this.items[indexes.from];
    // this.items.splice(indexes.from, 1);
    // this.items.splice(indexes.to, 0, element);
    this.items = reorderArray(this.items, indexes);
  }
}
