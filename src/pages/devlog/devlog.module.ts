import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { DevlogPage } from './devlog'

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    declarations: [
        DevlogPage,
    ],
    imports: [
        IonicPageModule.forChild(DevlogPage),
        NgZorroAntdModule.forRoot(),
    ],
    exports: [
        DevlogPage
    ]
})
export class DevlogPageModule { }