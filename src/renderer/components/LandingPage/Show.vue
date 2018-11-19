<template>
  <div class="show" v-if="active" >
    <div class="back" @click="toggle"></div>
    <input class="box" v-model="sayBox.text" :style="{'font-size': size+'vh'}" @keypress.enter="sayBox.instance.say()">
  </div>
</template>

<script>
import SayBox from "./SayBox";

const data = {
      active: false,
      sayBox: SayBox.data(),
      instance: null
    }

export default {
  data() {
    return data;
  },
  computed: {
    size() {
      return 23 / (Math.floor(this.sayBox.text.length / 16) + 1);
    }
  },
  methods: {
    toggle(){
      this.active=!this.active
    }
  },
  mounted () {
    console.log(this)
    this.instance = this
  }
};
</script>

<style scoped>
.show {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
}
.back {
  width: inherit;
  height: inherit;
  background-color: #000;  
  cursor: pointer;
}
.box {
  position: absolute;
  height: 25vh;
  width: 75vw;
  left: calc((100vw - 75vw) / 2);
  top: calc((100vh - 25vh) / 2);
  font-size: 23vh;
  color: #fff;
  background-color: #000;
  outline: none;
}
</style>
