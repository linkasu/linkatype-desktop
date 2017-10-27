<template>
    <list class="categories" :elements.sync='categories' :current='current' :choose='changeCategory' :add='addCategory'>

    </list>
</template>

<script>
import swal from 'sweetalert'



import List from './Common/List'

let store = {
    categories: this.$db.get('categories').value().store,
    phrasesData: null,
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
        changeCategory(data, context) {
            if (context) {
                let _this = this;
                let menu = new this.$electron.remote.Menu()
                menu.append(new this.$electron.remote.MenuItem({
                    label: 'Изменить', click() {
                        swal({

                            title: 'Изменить категорию',
                            content: {
                                element: "input",
                                attributes: {
                                    value: data.element.text
                                }
                            }
                        }).then((newText) => {
                            if (newText == null) return;
                             data.element.text= newText;
                        })
                    }
                }));
                menu.append(new this.$electron.remote.MenuItem({
                    label: 'Удалить', click() {
                        swal({

                            title: 'Удалить категорию',
                            content: data.element.text,

                            cancel: {
                                text: "Нет",
                                value: null,
                                visible: false,
                                className: "",
                                closeModal: true,
                            },
                            confirm: {
                                text: "Да",
                                value: true,
                                visible: true,
                                className: "",
                                closeModal: true
                            }

                        }).then((res) => {
                            if (res == false) return;
                            _this.current = 0;
                            _this.phrasesData.phrases.forEach((p)=>{
                                if( p.category==data.element.id){
                                    p.category=0;
                                }
                            })
                            _this.categories = _this.categories.filter((c) => {
                                return c.id != data.element.id;
                            });

                        })
                    }
                }));
                menu.popup(this.$electron.remote.getCurrentWindow());
                return;
            }
            this.current = data.index;
        },
        addCategory() {
            swal({
                title: 'Добавить категорию',

                content: "input",
            }).then((res) => {
                if (res == null) return;
                let inc = this.$db.get('categories').value().inc;
                this.categories.push({ text: res, id: inc });
                this.$db.set('categories.inc', inc + 1).write();

                this.current = this.categories.length - 1;
            });
        }
    },
    mounted() {
        this.$mousetrap.bind('ctrl+tab', (e) => {
            this.current += 1;
            if (this.current == this.categories.length) {
                this.current = 0;
            }
        })
    }
}
</script>


<style scoped>
.categories {
    background: #ecefe1;
}
</style>
