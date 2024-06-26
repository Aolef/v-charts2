import { bar, histogram } from '@v-charts2/bar/vue3'
import { logCopyRight } from '@v-charts2/core/utils'
import { createChartVue3 } from '@v-charts2/core/vue3'
import { funnel } from '@v-charts2/funnel/vue3'
import { line } from '@v-charts2/line/vue3'
import { pie, ring } from '@v-charts2/pie/vue3'
import { radar } from '@v-charts2/radar/vue3'
import { waterfall } from '@v-charts2/waterfall/vue3'

import { name, version } from '../package.json'

const charts = {
  bar,
  histogram,
  line,
  pie,
  ring,
  funnel,
  radar,
  waterfall
}

const VeHotChart = createChartVue3({
  name: 'VeHotChart',
  chartLib: charts
})

VeHotChart.install = app => {
  logCopyRight(name, version)
  app.component(VeHotChart.name, VeHotChart)
}

export default VeHotChart
