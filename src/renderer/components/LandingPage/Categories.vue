 <template>
    <list class="categories" :elements.sync='categories' :current='current' :choose='changeCategory' :add='addCategory'>

    </list>
</template>

<script>
import swal from "sweetalert2"

import List from "./Common/List"

let store = {
  categories: null,
  phrasesData: null,
  current: 0
}
export default {
  components: {
    List
  },
  data() {
    return store
  },
  watch: {
    categories: {
      handler(value) {
        this.$db.set("categories.store", value).write()
        return value
      },
      deep: true
    }
  },
  methods: {
    changeCategory(data, context) {
      if (context) {
        let _this = this
        let menu = new this.$electron.remote.Menu()
        menu.append(
          new this.$electron.remote.MenuItem({
            label: "Изменить",
            async click() {
              const { value } = await swal({
                title: "Изменить название категории",
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
                title: "Удалить категорию",

                text: data.element.text,
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Да, удалить",
                cancelButtonText: "Нет"
              })
              if (!value) return
              _this.current = 0
              console.log(_this.phrasesData)
              _this.phrasesData.phrases.forEach(p => {
                if (p.category == data.element.id) {
                  p.category = 0
                }
              })
              _this.categories = _this.categories.filter(c => {
                return c.id != data.element.id
              })
            }
          })
        )
        menu.popup(this.$electron.remote.getCurrentWindow())
        return
      }
      this.current = data.index
    },
    async addCategory() {
      const { value } = await swal({
        title: "Добавить категорию",
        input: "text",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Готово",
        cancelButtonText: "Нет"
      })
      if (value == null) return
      let inc = this.$db.get("categories").value().inc
      this.categories.push({ text: value, id: inc })
      this.$db.set("categories.inc", inc + 1).write()

      this.current = this.categories.length - 1
    }
  },
  mounted() {
    this.categories = this.$db.get("categories").value().store
    this.$mousetrap.bind("ctrl+tab", e => {
      this.current += 1
      if (this.current == this.categories.length) {
        this.current = 0
      }
    })
  }
}
</script>


<style scoped>
.categories {
  border-right: 0.1px solid #323232;
}
</style>
