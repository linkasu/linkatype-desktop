<template>
    <list class="categories" :elements.sync='categories' :current='current' :choose='changeCategory' :add='addCategory'>

    </list>
</template>

<script>
import swal from 'sweetalert'
import mousetrap from 'mousetrap'

import db from '../../node/db'


import List from './Common/List'


let store = {
            categories: db.get('categories').value().store,
            current: 0
        };
export default {
    components: {
        List
    },
    data() {
        return store;
    },
    watch: {
        categories: {
            handler(value) { 
                this.$db.set('categories.store', value).write();
                return value;
            },
            deep: true
        }
    },
    methods: {
        changeCategory(data) {
            this.current = data.index;
        },
        addCategory() {
            swal({
                title:'Добавить категорию',

                content: "input",
            }).then((res) => {
                if(res==null) return;
                let inc = this.$db.get('categories').value().inc;
                this.categories.push({text:res, id: inc});
                this.$db.set('categories.inc', inc+1).write();
                
                this.current = this.categories.length - 1;
            });
        }
    },
    mounted(){
        mousetrap.bind('ctrl+tab', (e)=>{
            this.current+=1;
            if (this.current==this.categories.length){
                this.current=0;
            }
        })
    },
    destroyed(){
        mousetrap.unbind('ctrl+tab')
    }
}
</script>


<style scoped>
.categories {
    background: #ecefe1;
}
</style>
