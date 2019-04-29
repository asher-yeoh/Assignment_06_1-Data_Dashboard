import { Component, OnInit } from '@angular/core';
import dataset1 from '../../dataset1';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  chartTypeNumOfLikesPerTagPerMonth = "bar"
  chartDataNumOfLikesPerTagPerMonth = []
  chartLabelsNumOfLikesPerTagPerMonth = []

  constructor() { }

  ngOnInit() {
  }

}




