<template>
  <div class="content-fluid">
      <say-box></say-box>    
      
    <div class="memory">
      
      <categories></categories>
      <phrases></phrases>
    </div>
    <controlls></controlls>
  </div>
</template>

<script>
import store from '@/node/store'

import Categories from './LandingPage/Categories'
import Phrases from './LandingPage/Phrases'
import SayBox from './LandingPage/SayBox'
import Controlls from './LandingPage/Controlls'

export default {
  components: { Categories, Phrases, SayBox, Controlls },
  data () {
    return store;
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
