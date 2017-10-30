<template>
    <span class='key'>{{value}}</span>
</template>

<script>
    import os from 'os'

    export default {
        props: ['text'],
        data () {
            return {
                darwin: os.type()=='Darwin' 
            }
        },
        computed:{
            value(){
                if (this.text!='mod') return this.text;
                return this.darwin?'cmd':'ctrl';
            }
        }
    }
</script>

<style>
.key {
  color:#f27d0c;
  font-size:20px;
}
</style>