import { Component, OnInit } from '@angular/core';
import imageGallery from '../../imageGallery';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  chartTypeNumOfImagesPerMonth = "line"
  chartDataNumOfImagesPerMonth = []
  chartLabelsNumOfImagesPerMonth = []

  constructor() { }

  ngOnInit() {
    //Number Of Images Per Month
    let dataNumOfImagesPerMonth = []
    let tempMonthlyImages = {}
    let monthlyImages = {
      'Jan': 0,
      'Feb': 0,
      'Mar': 0,
      'Apr': 0,
      'May': 0,
      'Jun': 0,
      'Jul': 0,
      'Aug': 0,
      'Sep': 0,
      'Oct': 0,
      'Nov': 0,
      'Dec': 0,
    }

    for(let image of imageGallery){
      let month = image.dateAdded.substring(4, 7);

      if(!tempMonthlyImages[month]){
        tempMonthlyImages[month] = 0
      }
      tempMonthlyImages[month] += 1
    
    }

    this.chartLabelsNumOfImagesPerMonth = Object.keys(monthlyImages)
        
    for(let image of Object.keys(tempMonthlyImages)){
      monthlyImages[image] = tempMonthlyImages[image]
    }

    for (let image of Object.keys(monthlyImages)) {
      dataNumOfImagesPerMonth.push(monthlyImages[image])
    }
  
    this.chartDataNumOfImagesPerMonth.push({
      data: dataNumOfImagesPerMonth,
      label: 'Number of Images',
    })

  }

}
