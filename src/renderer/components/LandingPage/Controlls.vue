<template>
  <div class="controlls">
    <button class="btn btn-default product-name">DisType pro</button>
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
  background: #3f51b5;
  top: 0;
  position: fixed;
  text-align: right;
  width: 100%;
}

button {
  height: 4.5vh;
  width: 4.5vh;
  margin: 0.25vh;
  background-position: center;
}

.product-name {
  position: absolute;
  left: 0;
  width: auto;
}
</style>
