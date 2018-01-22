<template>
<div>
    <say-box></say-box>    
      
    <div class="memory">
      
      <categories></categories>
      <phrases></phrases>
    </div>
</div>
</template>

<script>
import Categories from "./Categories"
import Phrases from "./Phrases"
import SayBox from "./SayBox"
import Controlls from "./Controlls"

export default {
  components: {
    Categories,
    Phrases,
    SayBox,
    Controlls
  }
}
</script>