import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LayoutComponent } from './layout'
// import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
    declarations: [
        LayoutComponent,
    ],
    imports: [
        IonicPageModule.forChild(LayoutComponent),
        // NgZorroAntdModule.forRoot(),
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule { }