import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScatterComponent } from './scatter'
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    declarations: [
        ScatterComponent,
    ],
    imports: [
        IonicPageModule.forChild(ScatterComponent),
        NgZorroAntdModule.forRoot(),

    ],
    exports: [
        ScatterComponent
    ]
})
export class HomeTabsPageModule { }