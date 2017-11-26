<template>
<div class='shortcuts'>
    <h1>Комбинации клавиш</h1>
    <ul>
    <h3>Везде:</h3>
    <li><key text='esc'></key> - войти/выйти в поле ввода</li>
    <li><key text='mod'></key><key text='+'></key><key text='↑'></key> - переключить на предыдущий чат</li>
    <li><key text='mod'></key><key text='+'></key><key text='↓'></key> - переключить на следующий чат</li>
    <li><key text='mod'></key><key text='+'></key><key text='s'></key> - сохранить набранный текст в фразу</li>
    <h3>В окне ввода:</h3>
    <li><key text='enter'></key> - сказать</li>
    <li><key text='mod'></key><key text='+'></key><key text='1...5'></key> - выбрать подсказку</li>
    <h3>Вне окна ввода:</h3>
    <li><key text='ctrl'></key><key text='+'></key><key text='tab'></key> - переключить категорию</li>
    <li><key text='mod'></key><key text='+'></key><key text='1...9'></key> - выбрать заготовленную фразу</li>
    
    </ul>
</div>
</template>

<script>
    import Key from './Shortcuts/Key.vue'

    export default {
        components: {Key}
    }

</script>

<style scoped>
.shortcuts {
    position: absolute;
    width: 80vw;
    height: 80vh;
    left: 10vw;
    top: 10vh;
    background-color: #adfcbd;
    overflow-y: scroll;

}
ul {
    list-style: none;
}
</style>