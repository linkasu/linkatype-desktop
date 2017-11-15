<template>
    <main class='content-fluid init-page'>
        <h1>Привет!</h1>
        <h2>Вы в первый раз зарустили программу.</h2>
        <h2>Мы произведем кое-какие настройки и продолжим.</h2>
        <h2>Нажмите на кнопку для проверки работы голоса.</h2>
        <h2><button class='btn btn-lg ' @click='testSpeech'>Протестировать озвучку</button></h2>
        <h2>Вы услышали голос?</h2>
        <h2>
            <button class='btn btn-lg ' @click='exit'>Да</button>
            <button class='btn btn-lg ' @click='settings.tts.offline=!settings.tts.offline' :class="{'btn-success':!settings.tts.offline}">Нет</button>
        </h2>
        <div v-show='!settings.tts.offline'>
            <h2>К сожалению, на вашем компьютере не работает оффлайн озвучка.</h2>
            <h2>Вы можете использовать онлайн озвучку от Яндекса.</h2>
            <h2>Она будет работать только с интенетом.</h2><h2> Выберете подходщий голос и нажмите "Продолжить".</h2>
            <h2>
                  <select v-model="settings.tts.voice" >
        <option value="zahar">Захар</option>
        <option value="ermil">Емиль</option>
        <option value="jane">Джейн</option>
        <option value="omazh">Ома</option>
     </select>
            </h2>
               <h2><button class='btn btn-lg ' @click='testSpeech'>Протестировать озвучку</button></h2>
        <h2>
            <button class='btn btn-lg ' @click='exit'>Продолжить</button></h2>
        </div>
    </main>
</template>

<style scoped>
    .init-page{
        text-align: center;
        background: #ecefe1;
        height:100vh;
        width:100vw;
        margin:0;
        position: absolute;
        top:0;
    }
</style>

<script>
    import Settings from './Settings.vue'

    export default {
        data () {
            return {
                settings: Settings.data().settings
            };
        },
        methods:{
            testSpeech(){
                this.$say.speak('Ура, всё работает!')
            },
            exit(){
                this.$parent.firstRun=false;
            }
        }
    }
</script>