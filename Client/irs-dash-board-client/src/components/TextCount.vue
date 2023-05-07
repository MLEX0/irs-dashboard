
<template>
    <div>
        <div class="count">{{ count }}</div>
        <div class="label"></div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "CountRectangle",
    data() {
        return {
            count: null,
        };
    },
    mounted() {
        axios
            .get("http://localhost:8080/api/count")
            .then((response) => {
                this.count = response.data.count;
            })
            .catch((err) => console.error(err));
    },
};
</script>

<style>

</style>