<template>
<div>
    <h1>
        Настройки
    </h1>
    <form>
  <div class="form-group">
    <label for="typingSoundTumbler">Озвучка звука клавиш:</label>
    <input type="button" class="btn btn-default" id="typingSoundTumbler" :value="settings.common.typingSound?'Выключить':'Включить'" :class='{"btn-success":settings.common.typingSound}' @click='settings.common.typingSound=!settings.common.typingSound'>

  </div>
    </form>
</div>
</template>

<script>
import db from '@/node/db'
const store = { settings: db.get('settings').value()};
export default {
    data(){
        return store;
    },
    watch: {
      settings:{
          handler(v){
                this.$db.set('settings', v).write();
                return v;
           
          },
          deep:true
      }  
    }
}

</script>