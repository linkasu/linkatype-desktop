<template>
<div class="settings" v-if="active">
    <div class="background" @click="active=!active"></div>
      <input type="button" class="btn btn-default" id="typingSoundTumbler" value="Озвучка звука клавиш" :class='{"btn-success":settings.common.typingSound}' @click='settings.common.typingSound=!settings.common.typingSound'> <br>
      <input type="button" class="btn btn-default" id="onlineTtsTumbler" value="Онлайн озвучка текста" :class='{"btn-success":!settings.tts.offline}' @click='settings.tts.offline=!settings.tts.offline'><br>
      <v-select v-if="!settings.tts.offline" :options="voices" v-model="voice"></v-select>
</div>
</template>

<script>
import vSelect from 'vue-select';
import db from '@/node/db';

const store = {
  settings: db.get('settings').value(),
  voices: [
    { value: 'zahar', label: 'Захар' },
    { value: 'ermil', label: 'Емиль' },
    { value: 'jane', label: 'Джейн' },
    { value: 'omazh', label: 'Ома' }
  ],
  voice: null,
  active: false
};
export default {
  components: { vSelect },
  data() {
    return store;
  },
  watch: {
    voice({label, value}){
      this.settings.tts.voice = value
        this.$db.set('settings', this.settings).write();
      
      return {label, value}
    }
  },
  mounted(){
    if(!this.settings.tts.voice){
      this.settings.tts.voice='jane'
    }
    this.voice = {value:this.settings.tts.voice, label: this.voices.filter((voice)=>{return voice.value==this.settings.tts.voice})[0].label }
  }
}
</script>

<style scoped>
.settings {
  position: absolute;
  display: block;
  top: 5vh;
  right: 0;
  width: 25vw;
  background: white;
  z-index: 0;
}
.settings > * {
  width: 100%;
  z-index: 1;
}
.background{
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
  background: rgba(255,255,255, .75);
  z-index: -1;
  cursor: pointer;
}
</style>
