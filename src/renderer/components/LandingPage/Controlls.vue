<template>
  <div class="controlls">
    <button class="btn btn-default product-name">LINKa: напиши</button>
    <show></show>
    <save></save>
    <alarm></alarm>    
    <shortcuts></shortcuts>    
    <settings></settings>
  </div>
</template>

<script>
import Alarm from "./Controlls/Alarm"
import Settings from "./Controlls/Settings"
import Save from "./Controlls/Save"
import Shortcuts from "./Controlls/Shortcuts"
import Show from "./Controlls/Show"

export default {
  components: { Alarm, Settings, Shortcuts, Save, Show }
};
</script>


<style scoped>
.controlls {
  background: #197377;
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
