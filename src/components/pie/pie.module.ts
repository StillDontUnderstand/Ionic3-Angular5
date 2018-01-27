import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PieComponent } from './pie'

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    declarations: [
        PieComponent,
    ],
    imports: [
        IonicPageModule.forChild(PieComponent),
        NgZorroAntdModule.forRoot(),

    ],
    exports: [
        PieComponent
    ]
})
export class HomeTabsPageModule { }