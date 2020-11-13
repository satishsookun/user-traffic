import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import { EChartOption } from 'echarts';

@Component({
  selector: 'ut-graph',
  templateUrl: './graph.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class GraphComponent implements OnInit {

  options: any;

  constructor(  ) {}

  ngOnInit(): void {


    this.options = {
      backgroundColor: '',
      title: {
        text: 'User chart',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#4b4b4b',
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      visualMap: {
        show: true,
        min: 1,
        max: 10,
        inRange: {
          colorLightness: [0, 1],
        },
      },
      series: [
        {
          name: 'Users',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: 5, name: 'Step 1' },
            { value: 3, name: 'Step 2' },
            { value: 2, name: 'Step 3' },
            { value: 2, name: 'Step 4' },
            { value: 2, name: 'Step 5' },
          ].sort((a, b) => a.value - b.value),
          roseType: 'radius',
          label: {
            normal: {
              textStyle: {
                color: '#4b4b4b',
              },
            },
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: '#4b4b4b',
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
          },
          itemStyle: {
            normal: {
              color: '#94c640',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.1)',
            },
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: () => Math.random() * 200,
        },
      ],
    };



  }

}
