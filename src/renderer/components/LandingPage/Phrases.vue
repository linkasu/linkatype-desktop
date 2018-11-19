<template>
    <list class="phrases" :elements.sync='currentPhrases' :choose='sayPhrase' :add='addPhrase' :drop='changeCategory'>

    </list>
</template>

<script>
import swal from "sweetalert2"

import List from "./Common/List"

import Categories from "./Categories"

let categoriesData = Categories.data()

let store = {
  phrases: [],
  currentPhrases: []
}
export default {
  components: {
    List
  },
  data() {
    return store
  },
  computed: {
    currentCategoryId() {
      if (categoriesData.categories == null) return null
      return categoriesData.categories[categoriesData.current].id
    }
  },
  watch: {
    phrases: {
      handler(value) {
        this.$db.set("phrases.store", value).write()
        this.updateCurrent()
        return value
      },
      deep: true
    },
    currentCategoryId(v) {
      this.updateCurrent()
      return v
    }
  },
  methods: {
    sayPhrase(data, context) {
      if (context) {
        this.context(data)
        return
      }
      this.$say.speak(data.element.text)
    },
    async addPhrase() {
      const { value } = await swal({
        title: "Добавить фразу",
        input: "text",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Готово",
        cancelButtonText: "Нет"
      })
      if (value == null) return
      this.add(value.trim())
    },
    add(phrase) {
      if (phrase == null) return
      let inc = this.$db.get("phrases").value().inc
      this.phrases.push({
        text: phrase,
        id: inc,
        category: this.currentCategoryId
      })
      this.$db.set("phrases.inc", inc + 1).write()

      this.current = this.phrases.length - 1
    },
    changeCategory() {},
    updateCurrent() {
      this.currentPhrases = this.phrases.filter(el => {
        return el.category == this.currentCategoryId
      })
    },
    context(data) {
      let _this = this
      let menu = new this.$electron.remote.Menu()
      menu.append(
        new this.$electron.remote.MenuItem({
          label: "Изменить",
          async click() {
            const { value } = await swal({
              title: "Изменить фразу",
              input: "text",
              inputValue: data.element.text,
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Готово",
              cancelButtonText: "Нет"
            })
            if (value == null) return
            data.element.text = value
          }
        })
      )
      menu.append(
        new this.$electron.remote.MenuItem({
          label: "Удалить",
          async click() {
            const { value } = await swal({
              title: "Удалить фразу",
              text: data.element.text,
              type: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Да, удалить",
              cancelButtonText: "Нет"
            })
            if (!value) return
            _this.phrases = _this.phrases.filter(p => {
              return p.id != data.element.id
            })
          }
        })
      )
      menu.popup(this.$electron.remote.getCurrentWindow())
    }
  },
  mounted() {
    this.phrases = this.$db.get("phrases").value().store
    categoriesData.phrasesData = store

    this.$mousetrap.bind(
      [
        "mod+1",
        "mod+2",
        "mod+3",
        "mod+4",
        "mod+5",
        "mod+6",
        "mod+7",
        "mod+8",
        "mod+9",
        "mod+0"
      ],
      e => {
        var id = parseInt(e.key)
        id--
        if (id == -1) {
          id = 10
        }
        var phrase = this.currentPhrases[id]
        if (phrase != null) {
          this.$say.speak(phrase.text)
        }
      }
    )
  },
  destroyed() {}
}
</script>


<style scoped>
.phrases {
  right: 0;
}
</style>
