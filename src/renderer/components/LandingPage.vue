<template>
  <div id="wrapper">
    <say-box></say-box>
    <div>
      <categories></categories>
      <phrases></phrases>
    </div>
  </div>
</template>

<script>
import db from '@/node/db'
  
import Categories from './LandingPage/Categories'
import Phrases from './LandingPage/Phrases'
import SayBox from './LandingPage/SayBox'

  export default {
    components: { Categories, Phrases, SayBox },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
</style>
