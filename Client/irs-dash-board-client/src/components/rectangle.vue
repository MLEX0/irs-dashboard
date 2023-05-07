<template>
    <canvas ref="canvas">
    <div id="rectangle">

    </div>
    </canvas>

</template>

<script>
export default {
    mounted() {
        const canvas = this.$refs.canvas;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'red';
        ctx.fillRect(10, 10, 50, 50);
    },
};
</script>

<style>

</style>