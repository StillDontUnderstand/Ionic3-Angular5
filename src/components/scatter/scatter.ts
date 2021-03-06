import { IonicPage } from 'ionic-angular';
import { Component, AfterViewInit, OnInit } from '@angular/core'
import * as ECharts from 'echarts';


@IonicPage()
@Component({
    template: `
    <ion-header>
    <ion-navbar>
    <button ion-button menuToggle>
        <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Home</ion-title>
    </ion-navbar>
</ion-header>

    <ion-content>

<div nz-row>
    <div nz-col [nzSpan] = "24">
        <div id="main"></div>           
    </div>
</div>
</ion-content>
    `
})

export class ScatterComponent implements AfterViewInit, OnInit {
    ngOnInit() {
        // this.dataService.getData().subscribe(
        //     data => console.log("content:setInterval:", data)
        // );
    }
    ngAfterViewInit() {
        //会多次触发
        var timer = setTimeout(() => {
            var myChart = ECharts.init(document.getElementById('main'), null, {
                renderer: 'svg'
            });
            myChart.setOption(option);
            window.clearTimeout(timer);
        }, 50);
    }
}

const option = {
    xAxis: {
        scale: true
    },
    yAxis: {
        scale: true
    },
    series: [{
        type: 'scatter',
        data: [
            [161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
            [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
            [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
            [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
            [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
            [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
            [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
            [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
            [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
            [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
            [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
            [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
            [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],

        ],
        itemStyle: {
            normal: {
                // color: '#c23531',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
        },
    }]
};

console.info('scatter page')