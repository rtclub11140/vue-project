<template>
  <div>
    <div class="columns">
      <div class="column">
        <input v-model.number="chartData[0]" type="range" class="slider is-fullwidth" step="1" min="0" max="10" value="1">
      </div>
      <div class="column">
        <input v-model.number="chartData[1]" type="range" class="slider is-fullwidth" step="1" min="0" max="10" value="1">
      </div>
      <div class="column">
        <input v-model.number="chartData[2]" type="range" class="slider is-fullwidth" step="1" min="0" max="10" value="1">
      </div>
      <div class="column">
        <input v-model.number="chartData[3]" type="range" class="slider is-fullwidth" step="1" min="0" max="10" value="1">
      </div>
      <div class="column">
        <input v-model.number="chartData[4]" type="range" class="slider is-fullwidth" step="1" min="0" max="10" value="1">
      </div>
    </div>
    <!-- react or vue จะใช้ ref แทน id เพื่อไม่ให้ชนกัน  โดยให้ vue จัดการ dom เอง -->
    <canvas ref="canvas"></canvas>
    {{chartData}}
  </div>
</template>
<script>
import 'bulma-extensions/dist/css/bulma-extensions.min.css'
import Chart from 'chart.js'
export default {
    watch: {
        chartData() {
            this.renderChart()
        }
    },
    mounted() {
        this.renderChart()
    },
    data() {
        return {
            chartData: [1, 2, 3, 4, 5]
        }
    },
    methods: {
        renderChart() {
            const { canvas } = this.$refs
            this.chart = new Chart(canvas, {
                type: 'line',
                data: {
                    labels: ['A', 'B', 'C', 'D', 'E'],
                    datasets: [
                        {
                            label: '2018',
                            //data: [12, 19, 3, 5, 2],
                            data: this.chartData,
                            borderColor: 'red',
                            fill: false
                        }
                    ]
                }
            })
        }
    }
}
</script>

