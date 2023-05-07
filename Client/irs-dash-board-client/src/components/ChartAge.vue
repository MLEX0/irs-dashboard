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
        axios.get('http://localhost:8080/api/age')
            .then(res => {
                const data = res.data.map(obj => Number(obj.age.years)); // извлекаем данные и преобразуем их в числа
                const youngCount = data.filter(years => years >= 18 && years < 44).length;
                const middleAgeCount = data.filter(years => years >= 44 && years < 60).length;
                const ElderlyCount = data.filter(years => years >= 60).length;
                const ctx = this.$refs.chart.getContext('2d');
                const chart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        label: ['Возрастные группы'],
                        labels: ['Молодые', 'В среднем возрасте', 'Пожилые'],
                        datasets: [
                            {
                                labels: ['Молодые', 'В среднем возрасте', 'Пожилые'],
                                data: [youngCount, middleAgeCount, ElderlyCount],
                                backgroundColor: ['rgb(255,99,132)', 'rgb(54,162,235)', 'rgb(204,101,254)'],
                                borderColor: ['rgb(255,99,132)', 'rgb(54,162,235)', 'rgb(204,101,254)'],
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


