<template>
    <button class="btn btn-default  ic-eye-24px" @click="toggle">
        .
    </button>
</template>

<script>
import Show from "../Show";
export default {
  methods: {
    toggle() {
      Show.data().instance.toggle()
    }
  },
  mounted() {
  }
};
</script>

<style scoped>
.ic-eye-24px {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%204.5C7%204.5%202.73%207.61%201%2012c1.73%204.39%206%207.5%2011%207.5s9.27-3.11%2011-7.5c-1.73-4.39-6-7.5-11-7.5zM12%2017c-2.76%200-5-2.24-5-5s2.24-5%205-5%205%202.24%205%205-2.24%205-5%205zm0-8c-1.66%200-3%201.34-3%203s1.34%203%203%203%203-1.34%203-3-1.34-3-3-3z%22%2F%3E%3C%2Fsvg%3E");
  background-position: center;
  background-repeat: no-repeat;
  min-width: 24px;
}
</style>
