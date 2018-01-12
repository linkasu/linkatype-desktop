<template>
<div class="settings">
      <input type="button" class="btn btn-default" id="typingSoundTumbler" value="Озвучка звука клавиш" :class='{"btn-success":settings.common.typingSound}' @click='settings.common.typingSound=!settings.common.typingSound'> <br>
      <input type="button" class="btn btn-default" id="onlineTtsTumbler" value="Онлайн озвучка текста" :class='{"btn-success":!settings.tts.offline}' @click='settings.tts.offline=!settings.tts.offline'><br>
      <v-select v-if="!settings.tts.offline" :on-change="changeVoice"  :options="voices" v-model="settings.tts.voice"></v-select>
</div>
</template>

<script>
import vSelect from "vue-select";
import db from "@/node/db";

const store = {
  settings: db.get("settings").value(),
  voices: [
    { value: "zahar", label: "Захар" },
    { value: "ermil", label: "Емиль" },
    { value: "jane", label: "Джейн" },
    { value: "omazh", label: "Ома" }
  ]
};
export default {
  components: { vSelect },
  data() {
    return store;
  },
  watch: {
    settings: {
      handler(v) {
        $db.set("settings", v).write();
        return v;
      },
      deep: true
    }
  },
  methods: {
    changeVoice({ value }) {
      this.settings.tts.voice = value;
      console.log(this.settings.tts.voice);
    }
  }
};
</script>

<style scoped>
.settings {
  position: absolute;
  display: block;
  top: 5vh;
  right: 0;
  width: 25vw;
  background: white;
}
.settings > * {
  width: 100%;
}
</style>
