import { Component, AfterViewInit } from '@angular/core'
import { IonicPage } from 'ionic-angular';

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
    <div id="anchor" nz-col [nzSpan] = "24">       
        <div id = "main"></div> 
    </div>
</div>
</ion-content>

    `,
})

export class PieComponent implements AfterViewInit {
    ngAfterViewInit() {
        console.info('ngAfterViewInit')

        var timer = setTimeout(() => {
            var myChart = ECharts.init(document.getElementById('main'));
            myChart.setOption(option,null,{
                renderer:'svg'
            })
            window.clearTimeout(timer);
        }, 100);


        // console.info('beforeDispose:', ECharts.getInstanceByDom(document.getElementById('main')));

    }
}

const option = {
    backgroundColor: '#fff',

    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 274, name: '联盟广告' },
                { value: 235, name: '视频广告' },
                { value: 400, name: '搜索引擎' }
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(0, 0, 0, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(0, 0, 0, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
console.info('pie page')