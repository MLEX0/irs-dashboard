<template>
    <div>
        <canvas ref="chart" width="400" height="400"></canvas>
    </div>
</template>

<script>

import { Chart, LineController, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';
import axios from 'axios';

Chart.register(LineController, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default {
    name: "EducationChart",
    data() {
        return {
            educationData: [],
        };
    },
    mounted() {
        axios
            .get("http://localhost:8080/api/education")
            .then((response) => {
                this.educationData = response.data;
                this.createChart();
            })
            .catch((err) => console.error(err));
    },
    methods: {
        createChart() {
            const educationTypes = [
                "01 - Высшее",
                "02 - Неполное высшее",
                "03 - Среднее профессиональное",
                "04 - Среднее (полное) общее",
                "05 - Основное общее",
                "06 - Начальное",
                "07 - Начальное профессиональное",
                "08 - Послевузовское",
                "80 - 9 классов и ниже",
                "81 - 7 классов и ниже",
                "82 - Неграмотный",
            ];

            const educationData = educationTypes.reduce(
                (acc, educationType) => {
                    const educationTypeCode = educationType.split(" - ")[0];
                    const educationTypeName = educationType.split(" - ")[1];
                    const count = this.educationData.filter(
                        (education) => education.r7703 === educationTypeCode
                    ).length;
                    acc.labels.push(educationTypeName);
                    acc.data.push(count);
                    return acc;
                },
                { labels: [], data: [] }
            );

            const ctx = this.$refs.chart.getContext("2d");
            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: ['Образование'],
                    datasets: [
                        {
                            label: educationData.labels[0],
                            data: [educationData.data[0]],
                            backgroundColor: [
                                "#ffcd56",
                            ],
                            borderColor: [
                                "#ffcd56",
                            ],
                            borderWidth: 1
                        },
                        {
                            label: educationData.labels[1],
                            data: [educationData.data[1]],
                            backgroundColor: [
                                "#ff6384",
                            ],
                            borderWidth: 1
                        },
                        {
                            label: educationData.labels[2],
                            data: [educationData.data[2]],
                            backgroundColor: [
                                "#36a2eb",
                            ],
                            borderWidth: 1
                        },
                        {
                            label: educationData.labels[3],
                            data: [educationData.data[3]],
                            backgroundColor: [
                                "#ff9f40",
                            ],
                            borderWidth: 1
                        },
                        {
                            label: educationData.labels[4],
                            data: [educationData.data[4]],
                            backgroundColor: [
                                "#4bc0c0",
                            ],
                            borderWidth: 1
                        },
                        {
                            label: educationData.labels[5],
                            data: [educationData.data[5]],
                            backgroundColor: [
                                "#9966ff",
                            ],
                            borderWidth: 1
                        },
                        {
                            label: educationData.labels[6],
                            data: [educationData.data[6]],
                            backgroundColor: [
                                "#00cc99",
                            ],
                            borderWidth: 1
                        },
                        {
                            label: educationData.labels[7],
                            data: [educationData.data[7]],
                            backgroundColor: [
                                "#ff5c33",
                            ],
                            borderWidth: 1
                        },
                        {
                            label: educationData.labels[8],
                            data: [educationData.data[8]],
                            backgroundColor: [
                                "#808080",
                            ],
                            borderWidth: 1
                        },
                        {
                            label: educationData.labels[9],
                            data: [educationData.data[9]],
                            backgroundColor: [
                                "#666699",
                            ],
                            borderWidth: 1,
                        },
                        {
                            label: educationData.labels[10],
                            data: [educationData.data[10]],
                            backgroundColor: [
                                "#b35900",
                            ],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    legend: {
                        display: false,
                    },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                },
            });
        },
    },
};
</script>