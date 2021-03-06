// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("DiagramaBarras");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["P1", "P2", "P3", "P6", "P7"],
    datasets: [
    {
      label: "Estado Actual",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [2,2,2,3,1],
    },
    
    {
      label: "Estado Actual",
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [3,3,3,3,3],
      
    }
    
    ],
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
        ticks: {
          min: 0,
          max: 4
        },
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
