<template>
  <div class="content-fluid">
      <say-box></say-box>    
    <div class="memory">
      <categories></categories>
      <phrases></phrases>
    </div>
  </div>
</template>

<script>
import store from '@/node/store'

import Categories from './LandingPage/Categories'
import Phrases from './LandingPage/Phrases'
import SayBox from './LandingPage/SayBox'

export default {
  components: { Categories, Phrases, SayBox },
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


</style>
