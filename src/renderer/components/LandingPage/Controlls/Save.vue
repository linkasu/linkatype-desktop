<template>
    <button class="btn btn-default  ic-save-24px" @click="save">
        .
    </button>
</template>

<script>
import SayBox from "../SayBox"
export default {
  methods: {
    save() {
      SayBox.data().instance.save()
    }
  },
  mounted() {
    this.$mousetrap.bind("mod+s", this.save)
  }
}
</script>

<style scoped>
.ic-save-24px {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M17%203H5c-1.11%200-2%20.9-2%202v14c0%201.1.89%202%202%202h14c1.1%200%202-.9%202-2V7l-4-4zm-5%2016c-1.66%200-3-1.34-3-3s1.34-3%203-3%203%201.34%203%203-1.34%203-3%203zm3-10H5V5h10v4z%22%2F%3E%3C%2Fsvg%3E");
  background-position: center;
  background-repeat: no-repeat;
  min-width: 24px;
}
</style>
