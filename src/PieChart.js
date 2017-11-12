import React, {Component} from 'react';
import Highcharts from 'highcharts';
import axios from 'axios';

class PieChart extends Component {
  constructor (props){
  super(props);
  this.chart = this.chart.bind(this);
}

  chart(data){
    Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: data.categories
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: data.series
    });
  };

  componentDidMount(){
    var _this = this;
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
      var data = {
        categories: ['Apples', 'Bananas', 'Oranges'],
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
      };
      _this.chart(data);
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    return (
      <div>
        <div id="container" style={{width:"100%", height:"400px"}}></div>
      </div>
    );
  }
}
export default PieChart;
