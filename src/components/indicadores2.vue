<template lang="pug">
#GraficaDetalleDespacho.container
  .buttons
    button#2000(@click(updateDatos()))
      | 2000
    button#2004
      | 2004
    button#2008
      | 2008
    button#2012
      | 2012
    button#2016.active
      | 2016
  Highcharts.chart(:options="chartOptions")
</template>
<script>
// import Vue from 'vue'
// import highcharts from 'highcharts-vue'
// Vue.use(highcharts)

// import Highcharts from '@/appScripts/highchartsConfig.js'
import {Chart} from 'highcharts-vue'
// Vue.use(Highcharts)
export default {
  name: "chart",
  components: {
    Highcharts: Chart,
  },
  mounted() {
    this.consultarDatosGrafica();
  },
  // props: {
  //   filtros: Object,
  // },
  data() {
    return {
      chartOptions:{},
    };
  },
  methods: {
    consultarDatosGrafica() {
      var dataPrev = {
          2016: [
            ['Camioneta Ford', 9],
            ['Vehiculo Ford', 5],
            ['Camioneta Chevrolet', 8],
            ['Vehiculo Chevrolet', 11],
          ],
        2012: [
          ['Camioneta Ford', 13],
          ['Vehiculo Ford', 5],
          ['Camioneta Chevrolet', 4],
          ['Vehiculo Chevrolet', 8],
        ],
        2008: [
          ['Camioneta Ford', 5],
          ['Vehiculo Ford', 9],
          ['Camioneta Chevrolet', 8],
          ['Vehiculo Chevrolet', 13],
        ],
        2004: [
          ['Camioneta Ford', 5],
          ['Vehiculo Ford', 15],
          ['Camioneta Chevrolet', 16],
          ['Vehiculo Chevrolet', 8],
        ],
        2000: [
          ['Camioneta Ford', 6],
          ['Vehiculo Ford', 5],
          ['Camioneta Chevrolet', 9],
          ['Vehiculo Chevrolet', 20],
        ]
      };

var data = {
  2016: [
    ['Camioneta Ford', 7],
    ['Vehiculo Ford', 11],
    ['Camioneta Chevrolet', 8],
    ['Vehiculo Chevrolet', 17],
  ],
  2012: [
    ['Camioneta Ford', 13],
    ['Vehiculo Ford', 9],
    ['Camioneta Chevrolet', 10],
    ['Vehiculo Chevrolet', 8],
  ],
  2008: [
    ['Camioneta Ford', 6],
    ['Vehiculo Ford', 5],
    ['Camioneta Chevrolet', 8],
    ['Vehiculo Chevrolet', 16],
  ],
  2004: [
    ['Camioneta Ford', 5],
    ['Vehiculo Ford', 16],
    ['Camioneta Chevrolet', 17],
    ['Vehiculo Chevrolet', 8],
  ],
  2000: [
    ['Camioneta Ford', 8],
    ['Vehiculo Ford', 9],
    ['Camioneta Chevrolet', 16],
    ['Vehiculo Chevrolet', 13],
  ]
};

var countries = 
[{
  name: 'Camioneta Ford',
  flag: 197582,
  color: 'rgb(201, 36, 39)'
}, {
  name: 'Vehiculo Ford',
  flag: 197604,
  color: 'rgb(201, 36, 39)'
}, {
  name: 'Camioneta Chevrolet',
  flag: 197507,
  color: 'rgb(0, 82, 180)'
}, {
  name: 'Vehiculo Chevrolet',
  flag: 197571,
  color: 'rgb(0, 0, 0)'
}, ];


function getData(data) {
  return data.map(function (country, i) {
    return {
      name: country[0],
      y: country[1],
      color: countries[i].color
    };
  });
}

      this.chartOptions = {
        chart: {
          type: 'column'
        },
        title: {
          text: 'PREFERENCIA DE VEHICULOS POR NUESTRO CLIENTES'
        },
        plotOptions: {
          series: {
            grouping: false,
            borderWidth: 0
          }
        },
        legend: {
          enabled: false
        },
        credits:{enabled:false},
        tooltip: {
          shared: true,
          headerFormat: '<span style="font-size: 15px">{point.point.name}</span><br/>',
          pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} VOTOS</b><br/>'
        },
        xAxis: {
          type: 'category',
          max: 4,
          labels: {
            useHTML: true,
            animate: true,
            formatter: function () {}
          }
        },
        yAxis: [{
          title: {
            text: 'PREFERENCIAS'
          },
          showFirstLabel: false
        }],
        series: [{
          color: 'rgb(158, 159, 163)',
          pointPlacement: -0.2,
          linkedTo: 'main',
          data: dataPrev[2016].slice(),
          name: '2012'
        }, {
          name: '2016',
          id: 'main',
          dataSorting: {
            enabled: true,
            matchByName: true
          },
          dataLabels: [{
            enabled: true,
            inside: true,
            style: {
              fontSize: '16px'
            }
          }],
          data: getData(data[2016]).slice()
        }],
        exporting: {
          allowHTML: true
        }        
      }        
      }, // END CHARTOPTIONS
    updateDatos(){

    },
  },
};
</script>
