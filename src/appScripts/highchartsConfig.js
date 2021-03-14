// import i18n from '@/i18n'

import Highcharts from 'highcharts'
import loadHighchartsMore from 'highcharts/highcharts-more.js';
import dataModule from "highcharts/modules/data";
import drilldown from "highcharts/modules/drilldown";
import exporting from 'highcharts/modules/exporting.js';
import accessibility from 'highcharts/modules/accessibility.js';
import Highcharts3D from 'highcharts/highcharts-3d'
loadHighchartsMore(Highcharts);
exporting(Highcharts);
dataModule(Highcharts);
drilldown(Highcharts);
Highcharts3D(Highcharts);
accessibility(Highcharts);

// Highcharts.setOptions({lang : i18n.messages[i18n.locale].Highcharts });

export default Highcharts