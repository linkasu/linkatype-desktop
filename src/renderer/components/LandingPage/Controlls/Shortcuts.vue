<template>
    <button class="btn btn-default ic-keyboard-24px " :class='{"btn-success":active}' @click='active=!active'>
        .
    </button>
</template>

<script>
const store = {
    active: false
}

export default {
    data(){
        return store;
    }
}
    
</script>

<style scoped>
.ic-keyboard-24px {
    background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M20%205H4c-1.1%200-1.99.9-1.99%202L2%2017c0%201.1.9%202%202%202h16c1.1%200%202-.9%202-2V7c0-1.1-.9-2-2-2zm-9%203h2v2h-2V8zm0%203h2v2h-2v-2zM8%208h2v2H8V8zm0%203h2v2H8v-2zm-1%202H5v-2h2v2zm0-3H5V8h2v2zm9%207H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3%203h-2v-2h2v2zm0-3h-2V8h2v2z%22%2F%3E%3C%2Fsvg%3E');
    right:0;
    position: absolute;
    background-position: center;
    background-repeat: no-repeat; 
    min-width: 24px;

}
</style>