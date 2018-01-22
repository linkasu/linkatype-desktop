<template>
    <list class="dialogs" :elements.sync='dialogs' :choose='choose' :current='current'>
    </list>
</template>

<script>
import List from "../Common/List";

export default {
  components: {
    List
  },
  props: ["text", "setText"],

  data() {
    return {
      current: 0,
      dialogs: [{ text: "" }, { text: "" }, { text: "" }]
    };
  },
  watch: {
    current(v) {
      this.setText(this.dialogs[v].text)
      return v
    },
    text(v) {
      this.dialogs[this.current].text = v
      return v
    }
  },
  methods: {
    choose(data) {
      this.current = data.index
    },
    up() {
      this.current--
      if (this.current < 0) {
        this.current = 2
      }
    },
    down() {
      this.current++
      if (this.current > 2) {
        this.current = 0
      }
    }
  },
  mounted() {
    this.$mousetrap.bind("mod+up", this.up)
    this.$mousetrap.bind("mod+down", this.down)
  }
}
</script>

<style >
.dialogs {
  position: absolute;
  top: 2vh;
  left: 1vw;
  width: 13vw;
}

.dialogs > button {
  height: 7vh;
}
</style>
