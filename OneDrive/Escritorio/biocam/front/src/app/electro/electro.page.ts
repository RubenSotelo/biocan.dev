import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexMarkers, ApexPlotOptions, ApexStroke, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis } from 'ng-apexcharts';

export type ChartOptions = {
  chart: ApexChart;
  series: ApexAxisChartSeries | any[];
  stroke: ApexStroke;
  markers: ApexMarkers;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  colors: any[];
  labels: any[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  fill: ApexFill;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-electro',
  templateUrl: './electro.page.html',
  styleUrls: ['./electro.page.scss'],
})

export class ElectroPage implements OnInit  {
  public areaOptions: Partial<ChartOptions>;

  constructor(private router: Router) {
    this.areaChart();
  }

  ngOnInit() {
  
  }
  datos:any[] = [0, 15, 0, 55, 0, 10, 0, 15, 0, 55, 0, 10, 0, 15, 0, 55, 0, 10, 0,
    15, 0, 55, 0, 10, 0, 15, 0, 55, 0, 10, 0, 15, 0, 55, 0, 10, 0,]
  
  inicio(){
    this.router.navigate(["inicio"], {
      replaceUrl: true,
    })
  }

  areaChart() {
    this.areaOptions = {
      chart: {
        type: 'area',
        height: 180,
        sparkline: {
          enabled: true,
        },
      },
      series: [
        {
          name: 'Electrocardiograma',
          data: this.datos,
        },
      ],
      stroke: {
        width: 2,
        colors: ['#ffd3a5'],
      },
      fill: {
        colors: ['#ffd3a5'],
        gradient: {
          gradientToColors: ['#2b2d3e'],
          opacityTo: 0.2,
        },
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: true,
        },
      },
      colors: ['#DCE6EC'],
      title: {
        text: 'Electrocardiograma',
        offsetX: 30,
        style: {
          fontSize: '24px',
          color: '#78909c',
        },
      },
    };
  }

}

