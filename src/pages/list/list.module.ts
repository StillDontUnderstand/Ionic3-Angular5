import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list'

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    declarations: [
        ListPage,
    ],
    imports: [
        IonicPageModule.forChild(ListPage),
        NgZorroAntdModule.forRoot(),

    ],
    exports: [
        ListPage
    ]
})
export class ListPageModule { }