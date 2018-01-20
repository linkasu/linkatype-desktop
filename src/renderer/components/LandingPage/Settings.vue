<template>
<div class="settings">
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
  voice: null
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
    console.log(this.settings.tts.voice)
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
}
.settings > * {
  width: 100%;
}
</style>
