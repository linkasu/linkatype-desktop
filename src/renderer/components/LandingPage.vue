<template>
<div>
  <init-page v-show='firstRun'></init-page>
  <div class="content-fluid" v-show='!firstRun'>
    <application v-show="!settingsButtonData.active"></application>
    <settings v-show="settingsButtonData.active"></settings>
    <shortcuts v-show="shortcutsButtonData.active"></shortcuts>
    <controlls></controlls>
  </div>
  </div>
</template>

<script>
import { app } from "electron";
import swal from "sweetalert";

import Application from "./LandingPage/Application";
import Settings from "./LandingPage/Settings";
import Controlls from "./LandingPage/Controlls";
import Shortcuts from "./LandingPage/Shortcuts";
import InitPage from "./LandingPage/InitPage";


export default {
  components: { Application, Controlls, Settings, Shortcuts, InitPage },
  data() {
    return {
      settingsButtonData: Controlls.components.Settings.data(),
      shortcutsButtonData: Controlls.components.Shortcuts.data(),
      firstRun: false
    };
  },
  watch: {
    firstRun(v) {
      this.$db.set("firstRun", v).write();
    }
  },

  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    }
  },
  created() {
    this.firstRun = this.$db.get("firstRun").value();

   }
};
</script>

<style>
body,
#app {
  padding: 0;
  margin: 0;
  font-family: "sana";
}
.btn {
  overflow: hidden;
  word-wrap: normal;
  white-space: normal;
}
</style>
