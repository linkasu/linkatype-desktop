<template>
  <div class="saybox form-group ">
    <predict ref="predict" :text.sync='text' :setText='(text)=>{this.text=text}'></predict>
    <input type="text" ref="input" class="form-control saybox-input" v-model="text" @keypress.enter="$say.speak(text)" @keydown="typing">
    <button type="button" class="form-control btn" @click="$say.speak(text)">Сказать</button>

  </div>
</template>
<script>

import mousetrap from 'mousetrap'

import Predict from './SayBox/Predict.vue'

export default {
  data() {
    return {
      text: '',
      player: new Audio('/static/typing.wav')
    };
  },
  components: { Predict },
  methods: {
    typing({ keyCode, metaKey }) {
      if (metaKey && keyCode > 48 && keyCode < 54) {
        this.$refs.predict.select(keyCode - 49)
        return;
      }
      if (keyCode == 27) {
        this.$refs.input.blur('blur')
        return;
      }
      if (keyCode < 48 || keyCode > 90) return;
      this.player.pause();
      this.player.currentTime = 0;
      this.player.play();
    }
  },
  mounted() {
    mousetrap.bind('mod+i', () => {
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
