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
        axios.get('http://localhost:8080/api/inn')
            .then(res => {
                const yesINN = Number(res.data[0].YesInn)
                const noINN = Number(res.data[0].NoInn)

                const ctx = this.$refs.chart.getContext('2d');

                const chart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        label: ['Наличие ИНН'],
                        labels: ['Есть ИНН', 'Нет ИНН'],
                        datasets: [
                            {
                                labels: ['Есть ИНН', 'Нет ИНН'],
                                data: [yesINN, noINN],
                                backgroundColor: ['rgb(255,99,132)', 'rgb(54,162,235)'],
                                borderColor: ['rgb(255,99,132)', 'rgb(54,162,235)'],
                                borderWidth: 1
                            },
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
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