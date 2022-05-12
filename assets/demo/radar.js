// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("RadarChart");
var myLineChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: [
        "1. Ambiente de Control", 
        "2. Evaluación de riesgos", 
        "3. Actividades de control", 
        "4. Información y comunicación", 
        "5. Actividades de Monitoreo"],
    datasets: [{
      label: "Estado Actual",
      data: [2,1,2,2,2],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    },{
      label: "Estado Objetivo",
      data: [3,3,3,3,3],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
      }],
  },
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    },
    scale: {
      ticks: {
        beginAtZero: true,
        max: 5,
        min: 0,
        stepSize: 1
      }
    }
  }
});
