import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChartVue3 } from '@v-charts2/core/vue3'
import { RadarChart } from 'echarts/charts'

import { radar } from './main'
import { name, version } from '../package.json'

echartsLib.use([RadarChart])

const VeRadar = createChartVue3({
  name: 'VeRadar',
  chartHandler: radar
})

VeRadar.install = app => {
  logCopyRight(name, version)
  app.component(VeRadar.name, VeRadar)
}

export default VeRadar
export { radar }
