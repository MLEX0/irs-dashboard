<template>
    <canvas ref="chart"></canvas>
</template>

<script>
import { defineComponent } from 'vue';
import { Chart, LineController, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';
import axios from 'axios';

Chart.register(LineController, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default defineComponent({
    mounted () {
        axios.get('http://localhost:8080/api/gender')
            .then(res => {
                const data = res.data.map(obj => Number(obj.r7101)); // извлекаем данные и преобразуем их в числа
                const maleData = data.filter(num => num === 1);
                const femaleData = data.filter(num => num === 2);
                const ctx = this.$refs.chart.getContext('2d');
                const chart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        label:['Пол'],
                        labels: ['Мужской','Женский',],
                        datasets: [
                            {
                                labels: ['Мужской', 'Женский'],
                                data: [maleData.length, femaleData.length],
                                backgroundColor: ['rgb(79,223,255)', 'rgba(255,69,69)'],
                                borderColor: ['rgba(79, 223, 255, 1)','rgba(255, 69, 69, 1)'],
                                borderWidth: 1,
                                circumference: 180,
                                rotation: -90,
                                dropShadow: 10

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