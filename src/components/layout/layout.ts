import { Component, ViewChild } from '@angular/core';
import { Nav ,NavController,IonicPage } from 'ionic-angular';

import { UserComponent } from '../../components/user/user.component';


import * as ECharts from 'echarts';

@IonicPage()
@Component({
    template: `
        <ion-menu [content]="content">
        <ion-header>
        <ion-toolbar>
            <ion-title>Menu</ion-title>
        </ion-toolbar>
        </ion-header>

        <ion-content>
        <ion-list>
            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
            {{p.title}}
            </button>
        </ion-list>
        </ion-content>
        </ion-menu>

        <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>
    `
})

export class LayoutComponent {
    @ViewChild(Nav) nav: NavController;

    rootPage: any = 'DevlogPage';

    // used for an example of ngFor and navigation
    pages: Array<{ title: string, component: any }> = [
        { title: 'Devlog', component: 'DevlogPage' },
        { title: 'List', component: 'ListPage' },
        { title: 'User', component: UserComponent },
        { title: 'Pie', component: 'PieComponent' },
        { title: 'Scatter', component: 'ScatterComponent' },
        { title: 'Gallery', component: 'GalleryPage' },
    ];
    openPage(page) {
        //判断是否需要跳转
        console.info('page',page.component.name)
        console.info('this.nav.first().component.name',this.nav.first().component.name)
        if(page.component.name!=this.nav.first().component.name){
            console.info('reset')
            if (document.getElementById('main') && ECharts.getInstanceByDom(document.getElementById('main'))) {
                console.info('beforeDispose:', ECharts.getInstanceByDom(document.getElementById('main')));
                ECharts.getInstanceByDom(document.getElementById('main')).dispose();
                console.info('afterDispose:', ECharts.getInstanceByDom(document.getElementById('main')));
            }
            // Reset the content nav to have just this page
            // we wouldn't want the back button to show in this scenario
            this.nav.setRoot(page.component);
        }
    }
}
console.info('layout page')
