<template>
    <div class="predict">
        <button v-for="(element, index) in words.length>0?words:['здесь','будут','отображаться','подсказки','предиктора']" class='btn btn-default ' @click="select(index)">{{element}}</button>

    </div>
</template>

<script>
export default {
  props: ["text", "setText", "input"],
  data() {
    return {
      words: [],
      pos: 0,
      key:
        "pdct.1.1.20171001T082116Z.f25e2b63fec6bfda.539464c0551ea8f6790d15ce6e78977d247d0804"
    };
  },
  watch: {
    text(v) {
      if (v == "") {
        this.clear()
        return v
      }
      let url = `https://predictor.yandex.net/api/v1/predict.json/complete?key=${this
        .key}&q=${encodeURIComponent(
        v.slice(0, this.position())
      )}&lang=ru&limit=5`
      this.$http
        .get(url)
        .then(res => {
          this.pos = res.data.pos
          this.words = res.data.text
        })
        .catch(e => {
          this.clear()
        })

      return v
    }
  },
  methods: {
    clear() {
      this.words = []
      this.pos = 0
    },
    select(index) {
      let word = this.words[index]
      if (word == null) {
        return
      }

      let text = this.text
      word += " "
      let notend = this.position() != this.text.length
      if (notend) {
        word += this.text.slice(this.position())
        text = this.text.slice(0, this.position())
      }
      if (this.pos < 0) {
        text = text.slice(0, this.pos)

        this.setText(text + word)
      } else {
        this.setText(text + (this.pos > 0 ? " " : "") + word)
      }
      this.clear()
    },

    position() {
      return this.input.selectionEnd
    }
  }
};
</script>

<style scoped>
.predict > button {
  height: 7vh;
  width: calc(20% - 2px);
}
</style>
