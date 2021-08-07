import React from 'react';
import Chart from "react-apexcharts";
import moment from 'moment';
class ChartHourly extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        console.log('chart ctor');
    }
    render(){
        console.log('render chart');
        this.state = {
          
            series: [{
              name: "Temp",
              data: this.props.dayInfo?.map((item:any) => (item.temp))
            }],
            options: {
              chart: {
                type: 'area',
                height: 350,
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              labels: Array.from(Array(24).keys()).map(item=>{var date = new Date(); date.setHours(item); return moment(date).format('HH:00');}),
              legend: {
                horizontalAlign: 'left'
              },
              xaxis:{
               labels:{ style:{
                  color: "white"
                }
              }
              },
              yaxis:{
                labels: {
                  style:{
                  color: "white"
                }
              }
              },
            },
          
          
          };
        return(
            <div>
                <Chart options={this.state.options} series={this.state.series} type="area" width={1900} height={450} />
            </div>
        )
    }
}
export default ChartHourly;
