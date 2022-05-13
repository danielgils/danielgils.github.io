// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("barras_det_p2");
var myLineChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: [
      "P6", 
      "P7", 
      "P8", 
      "P9"],
      datasets: [{
        label: "Estado Actual",
        data: [3,1,1,1],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      },{
        label: "Estado Objetivo",
        data: [3,3,3,3],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
        }],
  },
  options: {
    indexAxis: 'y',
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 5
        },
        gridLines: {
          display: true
        }
      }],
      yAxes: [{
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
