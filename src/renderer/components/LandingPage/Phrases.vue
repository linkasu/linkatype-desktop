<template>
    <list class="phrases" :elements.sync='currentPhrases' :choose='sayPhrase' :add='addPhrase' :drop='changeCategory'>

    </list>
</template>

<script>
import swal from 'sweetalert'
import mousetrap from 'mousetrap'

import db from '../../node/db'


import List from './Common/List'

import Categories from './Categories'
let categoriesData = Categories.data();

let store = {
    phrases: db.get('phrases').value().store,

};
export default {
    components: {
        List
    },
    data() {
        return store;
    },
    computed: {
        currentCategoryId() {
            return (categoriesData.categories[categoriesData.current]).id;

        },
        currentPhrases() {
            return this.phrases.filter((el) => {
                return el.category == this.currentCategoryId;
            })
        }
    },
    watch: {
        phrases: {
            handler(value) {
                this.$db.set('phrases.store', value).write();
                return value;
            },
            deep: true
        }
    },
    methods: {
        sayPhrase(data) {
            this.$say.speak(data.element.text)
        },
        addPhrase() {
            swal({
                title: 'Добавить фразу',

                content: "input",
            }).then((res) => {
                if (res == null) return;
                let inc = this.$db.get('phrases').value().inc;
                this.phrases.push({ text: res, id: inc, category: this.currentCategoryId });
                this.$db.set('phrases.inc', inc + 1).write();

                this.current = this.phrases.length - 1;
            });
        },
        changeCategory() {

        }
    },
    mounted() {
        mousetrap.bind(['mod+1', 'mod+2', 'mod+3', 'mod+4', 'mod+5', 'mod+6', ' mod+7', 'mod+8', 'mod+9', 'mod+0'], (e) => {
            var id = parseInt(e.key);
            id--;
            if (id == -1) {
                id = 10;
            }
            var phrase = this.currentPhrases[id];
            if (phrase != null) {
                this.$say.speak(phrase.text)

            }

        })
    },
    destroyed() {

    }
}
</script>


<style scoped>
.phrases {
    background: #e1efec;
    right: 0;
}
</style>
