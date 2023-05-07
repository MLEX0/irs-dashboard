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
        axios.get('http://localhost:8080/api/passport')
            .then(res => {
                const yesPassport = Number(res.data[0].YesPassport)
                const noPassport = Number(res.data[0].NoPassport)

                const ctx = this.$refs.chart.getContext('2d');

                const chart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        label: ['Наличие паспорта'],
                        labels: ['Есть паспорт', 'Нет паспорта'],
                        datasets: [
                            {
                                labels: ['Есть паспорт', 'Нет паспорта'],
                                data: [yesPassport, noPassport],
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


