import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApexAxisChartSeries, ApexAnnotations, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexMarkers, ApexPlotOptions, ApexStroke, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis } from 'ng-apexcharts';

export type ChartOptions = {
  annotations: ApexAnnotations;
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
  selector: 'app-sensores',
  templateUrl: './sensores.page.html',
  styleUrls: ['./sensores.page.scss'],
})
export class SensoresPage implements OnInit {

  public chartOptions: Partial<ChartOptions>;
  public areaOptions: Partial<ChartOptions>;
  public radialOptions: Partial<ChartOptions>;
  public estable:any[] = [50]
  public riesgo:any[] = [70]
  public critico:any[] = [-100]

  constructor(private router: Router) {
    this.barChart();
    this.areaChart();
    this.radial();
    
   }

  ngOnInit() {
  }

  electro(){
    this.router.navigate(["electro"], {
      replaceUrl: true,
    })
  }

  barChart() {
    this.chartOptions = {
      series: [
        {
          name: "Estable",
          data: this.estable
        },
        {
          name: "Peligro",
          data: this.riesgo
        },
        {
          name: "Critico",
          data: this.critico
        }
      ],
      chart: {
        type: "bar",
        height: 200,
        stacked: false,
        
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 0,
        colors: ["#fff"]
      },
      title: {
        text: "Temperatura",
        style: {
          color: "#FFFFFF"
        }
      },
      xaxis: {
        categories: [""],
        labels: {
          formatter: function(val) {
            return val+"°C";
          }
        },      
      },
      yaxis: {
        min: -100,
        max: 100,
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: true,
        },
      },
      fill: {
        opacity: 1,
        colors:['#2ECC71', '#F1C40F', '#E74C3C']
      },
      dataLabels: {
        style: {
          colors: ['#FFFFFF']
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40,
        labels: {
          colors: ['#FFFFFF']
        },
        markers:{
          fillColors:['#2ECC71', '#F1C40F', '#E74C3C']
        }
        
      }
    };
  }

  areaChart() {
    this.areaOptions = {
      chart: {
        type: 'area',
        height: 180,
        
      },
      series: [
        {
          name: 'Sales',
          data: [
            47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93,
            53, 61, 27, 54, 43, 19, 46,
          ],
        },
      ],
      stroke: {
        width: 3,
        colors: ['#ffd3a5'],
      },
      fill: {
        colors: ['#ffd3a5'],
        gradient: {
          gradientToColors: ['#2b2d3e'],
          opacityTo: 0.2,
        },
      },
      dataLabels: {
        enabled:true,
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
      },
      colors: ['transparent']
    };
  }

  radial() {
    this.radialOptions = {
      series: [50],
      chart: {
        height: 350,
        type: "radialBar",
        offsetY: -10
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              color: undefined,
              offsetY: 120
            },
            value: {
              offsetY: 76,
              fontSize: "22px",
              color: undefined,
              formatter: function(val) {
                return val + "%";
              }
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
        }
      },
      stroke: {
        dashArray: 4
      },
      labels: ["Oxigeno"]
    };
  }
  
}
