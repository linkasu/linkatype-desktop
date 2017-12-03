<template>
  <div class="controlls">
    <settings></settings>
    <alarm></alarm>
    <shortcuts></shortcuts>
  </div>
</template>

<script>
import Alarm from './Controlls/Alarm'
import Settings from './Controlls/Settings'
import Shortcuts from './Controlls/Shortcuts'

export default {

  methods: {
  },
  components: { Alarm, Settings, Shortcuts },
}
</script>


<style scoped>
.controlls {
  height: 5vh;
  background: #3f51b5;
  top: 0;
  position: fixed;
  text-align: center;
  width: 100%;
}

.controlls>button {
  height: 5vh;
}
</style>
