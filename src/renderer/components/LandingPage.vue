<template>
  <div class="content-fluid">
    <div :is='state'></div>
    <controlls></controlls>
  </div>
</template>

<script>
import Application from './LandingPage/Application' 
import Settings from './LandingPage/Settings' 
import Controlls from './LandingPage/Controlls' 


export default {
  components: { Application, Controlls, Settings },
  data () {
    return {
      settingsButtonData: Controlls.components.Settings.data()
    };
  },
  computed:{
    state(){
      
      return this.settingsButtonData.active?'Settings': 'Application';
    }
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link)
    }
  }
}
</script>

<style>
.btn{
        text-overflow: ellipsis;
        word-wrap: normal; 
        white-space: normal;
}

</style>
