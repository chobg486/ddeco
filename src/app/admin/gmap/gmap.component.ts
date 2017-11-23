import { Component, OnInit } from '@angular/core';
import { Button } from '@syncfusion/ej2-buttons';
import { Draggable} from '@syncfusion/ej2-base';
import { Chart, LineSeries } from '@syncfusion/ej2-charts';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {
  autoCompleteCallback1(selectedData: any) {}
  constructor() { }

  ngOnInit() {
    const button: Button = new Button();
    button.appendTo('#normalbtn');
    const dragElement: HTMLElement = document.getElementById('element1');
    const draggable: Draggable = new Draggable(dragElement, {clone: false});

    Chart.Inject(LineSeries);
    const chartData: any[] = [
        { x: 2005, y: 28 }, { x: 2006, y: 25 }, { x: 2007, y: 26 }, { x: 2008, y: 27 },
        { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }
    ];
    const chart: Chart = new Chart({
        primaryXAxis: {
            title: 'Year',
            minimum: 2004, maximum: 2012, interval: 1
        },
        primaryYAxis: {
            minimum: 20, maximum: 40, interval: 5,
            title: 'Efficiency',
            labelFormat: '{value}%'
        },
        series: [{
            dataSource: chartData, width: 2,
            xName: 'x', yName: 'y',
            name: 'India',
            type: 'Line'
        }],
        title: 'Efficiency of oil-fired power production'
    }, '#element');
  }

}
