<template>
  <div class="saybox form-group ">
    <!-- <predict></predict> -->
    <input type="text" class="form-control" v-model="text" @keypress.enter="speak" @keydown="typing">
    <button type="button" class="form-control btn" @click="speak">Сказать</button>

  </div>
</template>
<script>
import say from 'say'

export default {
  data() {
    return {
      text:'',
      player: new Audio('/static/typing.wav')
    };
  },
  methods:{
    speak(){
      
      say.stop();
      say.speak(this.text)
    },
    typing(e){
      if(e.keyCode<48||e.keyCode>90) return;
      this.player.pause();
      this.player.currentTime=0;
      this.player.play();
    }
  },
  mounted(){
    
  }

}
</script>


<style scoped>
.saybox {
  width: 100%;
  height: 25vh;
  padding-left: 15vw;
  padding-right: 15vw;
  padding-top: 5vh;
  background: #dcdfdc;
  position: absolute;
  text-align: center;
}
</style>
