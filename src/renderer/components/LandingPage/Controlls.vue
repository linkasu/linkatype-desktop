<template>
  <div class="controlls">
    <button class="btn btn-success product-name">DisType pro</button>
    <alarm></alarm>    
    <shortcuts></shortcuts>    
    <settings></settings>
  </div>
</template>

<script>
import Alarm from "./Controlls/Alarm";
import Settings from "./Controlls/Settings";
import Shortcuts from "./Controlls/Shortcuts";

export default {
  methods: {},
  components: { Alarm, Settings, Shortcuts }
};
</script>


<style scoped>
.controlls {
  height: 5vh;
  background: #3f51b5;
  top: 0;
  position: fixed;
  text-align: right;
  width: 100%;
}

.controlls > button {
  height: 4.5vh;
  margin: 0.25vh;
}

.product-name {
  position: absolute;
  left: 0;
}
</style>
