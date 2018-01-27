import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


// import { SlidesPage } from '../pages/slides/slides';
// import { LayoutComponent } from '../components/layout/layout.component';
// import { DevlogComponent } from '../pages/home/devlog.component'
import { UserComponent } from '../components/user/user.component'
// import { PieComponent } from '../components/pie/pie.component'
// import { ScatterComponent } from '../components/scatter/scatter.component'


import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    MyApp,
    // HomePage,
    // ListPage,
    // SlidesPage,
    // LayoutComponent,
    // DevlogComponent,
    UserComponent,
    // PieComponent,
    // ScatterComponent,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgZorroAntdModule.forRoot(),
    BrowserAnimationsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage,
    // ListPage,
    // SlidesPage,
    // LayoutComponent,
    // DevlogComponent,
    UserComponent,
    // PieComponent,
    // ScatterComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
