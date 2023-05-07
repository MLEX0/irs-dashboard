<template>
    <div>
        <canvas ref="chart"></canvas>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Chart, LineController, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';
import axios from 'axios';

Chart.register(LineController, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default defineComponent({
    mounted () {
        axios.get('http://localhost:8080/api/militaryticket')
            .then(res => {
                const biletYes = Number(res.data[0].BiletYes)
                const biletNot = Number(res.data[0].BiletNot)
                const total = biletYes + biletNot

                const biletYesPercent = Math.round((biletYes / total) * 100)
                const biletNotPercent = Math.round((biletNot / total) * 100)

                const ctx = this.$refs.chart.getContext('2d');
                const chart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Наличие военного билета'],
                        datasets: [{
                            label: '% Есть билет',

                            data: [biletYesPercent],
                            backgroundColor: [
                                'rgba(79, 223, 255, 1)',
                            ],
                            borderColor: [
                                'rgba(79, 223, 255, 1)',
                            ],
                            borderWidth: 1
                        }, {
                            label: '% Нет билета',
                            data: [biletNotPercent],
                            backgroundColor: [
                                'rgba(255, 165, 0, 1)',
                            ],
                            borderColor: [
                                'rgba(255,165,0,1)',
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        legend: {
                            labels: {

                                fontFamily: 'Iceberg'
                            }
                        },
                        scales: {
                            xAxes: [{
                                ticks: {

                                    fontFamily: 'Iceberg'
                                }
                            }],
                            yAxes: [{
                                ticks: {

                                    fontFamily: 'Iceberg'
                                }
                            }]
                        }
                    }
                });
            })
            .catch(err => {
                console.error(err);
            });
    }
});
</script>


//