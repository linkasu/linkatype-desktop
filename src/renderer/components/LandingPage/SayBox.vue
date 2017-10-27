<template>
  <div class="saybox form-group ">
    <predict ref="predict" :text.sync='text' :input.sync="this.$refs.input" :setText='setText'></predict>
    <input type="text" ref="input" class="form-control saybox-input" v-model="text" @keypress.enter="$say.speak(text)" @keydown="typing">
    <button type="button" class="form-control btn" @click="$say.speak(text)">Сказать</button>
    <dialogs ref="dialogs"  :text.sync='text' :setText='setText'></dialogs>
  </div>
</template>
<script>

import Settings from './Settings'
import Predict from './SayBox/Predict.vue'
import Dialogs from './SayBox/Dialogs.vue'

export default {
  data() {
    return {
      text: '',
      settingsData: Settings.data(),
      player: new Audio('static/typing.wav')
    };
  },
  components: { Predict, Dialogs },
  methods: {
    typing({ keyCode, metaKey }) {

      if (metaKey&&(keyCode==38||keyCode==40)){
        this.$refs.dialogs[keyCode==38?'up':'down']();
      }
      // predictor
      if (metaKey && keyCode > 48 && keyCode < 54) {
        this.$refs.predict.select(keyCode - 49)
        return;
      }
      // escape
      if (keyCode == 27) {
        this.$refs.input.blur('blur')
        return;
      }
      // not keys
      if (keyCode < 48 || keyCode > 90) return;

      if (this.settingsData.settings.common.typingSound){
      this.player.pause();
      this.player.currentTime = 0;
      this.player.play();
      }
    },
    setText(text) { this.text = text }
  },
  mounted() {
    // focus
    this.$mousetrap.bind('esc', () => {
      this.$refs.input.focus();
    })

  }

}
</script>


<style scoped>
.saybox {
  width: 100%;
  height: 25vh;
  padding-left: 15vw;
  padding-right: 15vw;
  padding-top: 2vh;
  padding-bottom: 2vh;
  background: #dcdfdc;
  position: absolute;
  text-align: center;
}

.saybox>* {
  height: 7vh;
}
</style>
