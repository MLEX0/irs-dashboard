<template>
<div class="body">
    <div>
        <div class="body">
        <div class="container">
            <div class="rectangle_margin">
            <div class="rectangle_count">
                <div class="rectangle_center">
               <div class="h1"> <TextCount/>

               </div>
                    <div class="h2">
                      Всего записей
                    </div>
            </div>
            </div>
            </div>
        </div>
            <div class="rectangle_margin">
            <div class="rectangle_gender">
                <ChartGender/>
                <div class="h2">
                    Пол
                </div>
            </div>
            </div>

            <div class="rectangle_miletari">
                <div class="body">
                <ChartMilitaryTicket/>

                </div>
            </div>

        </div>

<div class="body">
    <div class="rectangle_margintop">

        <div class="container">
            <div CLASS="rectangle_margin">
            <div class="rectangle_age">
                <ChartAge/>
                <div class="h2">
                    Возраст
                </div>
            </div></div>
    <div class="rectangle_education">
        <ChartEducation/>

    </div>


        <div class="rectangle_marginleft">

        <div class="rectangle_innpassn">
            <ChartPassport/>
            <div class="h2">
                Пасспорт
            </div>
        </div>
            <div class="rectangle_margintop">
        <div class="rectangle_innpassn">
            <ChartINN/>
            <div class="h2">
                ИНН
            </div>
        </div>
            </div>
            <div class="rectangle_margintop">
        <div class="rectangle_innpassn">
            <ChartSNILS/>
            <div class="h2">
                СНИЛС
            </div>
        </div>
        </div>
        </div>
        </div>

    </div>
    </div>
    </div>
</div>
</template>



<script>
import rectangle from '@/assets/_grid.scss'

import ChartGender from './components/ChartGender.vue'
import ChartAge from './components/ChartAge.vue'
import ChartMilitaryTicket from "@/components/ChartMilitaryTicket.vue";
import ChartEducation from "@/components/ChartEducation.vue";
import TextCount from "@/components/TextCount.vue";
import ChartPassport from "@/components/ChartPassport.vue";
import ChartINN from "@/components/ChartINN.vue";
import ChartSNILS from "@/components/ChartSNILS.vue";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

export default {
    name: 'App',
    components: {
        ChartGender: ChartGender,
        ChartAge: ChartAge,
        ChartMilitaryTicket: ChartMilitaryTicket,
        ChartEducation: ChartEducation,
        ChartPassport: ChartPassport,
        ChartINN: ChartINN,
        ChartSNILS: ChartSNILS,
        TextCount: TextCount,
        rectangle
    },

}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
}

</style>


<!--<template>
  <Doughnut :data="data" :options="options" />
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Doughnut
  },
  data() {
    return chartConfig
  }
}
</script>-->


<script setup>
import Rectangle from "@/components/rectangle.vue";

</script>