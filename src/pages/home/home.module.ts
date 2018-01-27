import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home'
import {DevlogComponent} from './devlog.component'

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    declarations: [
        HomePage,
        DevlogComponent,
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
        NgZorroAntdModule.forRoot(),

    ],
    exports: [
        HomePage
    ]
})
export class HomeTabsPageModule { }