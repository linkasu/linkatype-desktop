<template>
    <button class="btn btn-default  ic-add-alert-24px" @click="alarm">
        .
    </button>
</template>

<script>
export default {
    data() {
        return {

            alarmPlayer: new Audio('static/alarm.wav')
        }
    },
    methods: {
        alarm() {
            this.alarmPlayer.pause();
            this.alarmPlayer.currentTime = 0;
            this.alarmPlayer.play();
        }
    },
    mounted() {
        this.$mousetrap.bind('mod+f', this.alarm);
    }

}
</script>

<style scoped>
.ic-add-alert-24px {
    background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M10.01%2021.01c0%201.1.89%201.99%201.99%201.99s1.99-.89%201.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59%202.71%2012.88%202%2012%202s-1.59.71-1.59%201.59v.72C7.37%205.03%205.12%207.75%205.12%2011v5.82L3%2018.94V20h18v-1.06l-2.12-2.12zM16%2013.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z%22%2F%3E%3C%2Fsvg%3E');
    background-position: center;
    background-repeat: no-repeat; 
    min-width: 24px;
}
</style>
