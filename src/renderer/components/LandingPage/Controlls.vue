<template>
  <div class="controlls">
    <alarm></alarm>
  </div>
</template>

<script>
import Alarm from './Controlls/Alarm'

export default {

  methods: {
  },
  components: { Alarm },
}
</script>


<style scoped>
.controlls {
  height: 5vh;
  background: #acdcac;
  bottom: 0;
  position: fixed;
  text-align: center;
  width: 100%;
}

.controlls>button {
  height: 5vh;
}

.ic-settings-applications-24px {
  background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%2010c-1.1%200-2%20.9-2%202s.9%202%202%202%202-.9%202-2-.9-2-2-2zm7-7H5c-1.11%200-2%20.9-2%202v14c0%201.1.89%202%202%202h14c1.11%200%202-.9%202-2V5c0-1.1-.89-2-2-2zm-1.75%209c0%20.23-.02.46-.05.68l1.48%201.16c.13.11.17.3.08.45l-1.4%202.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26%201.85c-.03.17-.18.3-.35.3h-2.8c-.17%200-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34%200-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69%200-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51%201.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17%200%20.32.13.35.29l.26%201.85c.43.18.82.41%201.18.69l1.74-.7c.16-.06.34%200%20.43.15l1.4%202.42c.09.15.05.34-.08.45l-1.48%201.16c.03.23.05.46.05.69z%22%2F%3E%3C%2Fsvg%3E');
  background-position: center;
  min-width: 24px;
}
</style>
