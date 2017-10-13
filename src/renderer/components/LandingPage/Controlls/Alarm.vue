<template>
    <button class="btn btn-default  ic-add-alert-24px" @click="alarm">
        .
    </button>
</template>

<script>
export default {
    data() {
        return {

            alarmPlayer: new Audio('/static/alarm.wav')
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

