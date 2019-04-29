import { Component, OnInit } from '@angular/core';
import dataset from '../../dataset';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  chartTypeNumOfLikesPerTag = "pie"
  chartDataNumOfLikesPerTag = []
  chartLabelsNumOfLikesPerTag = []

  constructor() { }

  ngOnInit() {
    //NumOfLikesPerTag
    let datasetNumOfLikesPerTag = []
    let numOfLikesPerTag = {}
    for( let likeCount of dataset){
      for (let tag of likeCount.tags) {
        if(!numOfLikesPerTag[tag]){
          numOfLikesPerTag[tag] = 0
        }
        numOfLikesPerTag[tag] += likeCount.likes
      }
    }

    this.chartLabelsNumOfLikesPerTag = Object.keys(numOfLikesPerTag)
    for( let tags of Object.keys(numOfLikesPerTag)){
      datasetNumOfLikesPerTag.push(numOfLikesPerTag[tags])
    }

    this.chartDataNumOfLikesPerTag.push({
      data: datasetNumOfLikesPerTag
    })


  }

}