<template>
    <div class="predict">
        <button v-for="(element, index) in words" class='btn btn-default ' @click="select(index)">{{element}}</button>

    </div>
</template>

<script>
export default {
    props: ['text', 'setText'],
    data() {
        return {
            words: ['','','','',''],
            pos: 0,
            key: 'pdct.1.1.20171001T082116Z.f25e2b63fec6bfda.539464c0551ea8f6790d15ce6e78977d247d0804'
        }
    },
    watch: {
        text(v) {
            if (v == '') {
                this.clear();
                return v;

            }
            let url = `https://predictor.yandex.net/api/v1/predict.json/complete?key=${this.key}&q=${encodeURIComponent(v)}&lang=ru&limit=5`;
            this.$http.get(url).then((res) => {
                this.pos = (res.data.pos);
                this.words = (res.data.text)
            }).catch(e => {
                this.clear();
            })

            return v;
        }
    },
    methods: {
        clear() {
            this.words = [];
            this.pos = 0;
        },
        select(index) {
            let word = this.words[index];
            if (word == null) {
                return;
            }
            word += ' ';
            if (this.pos < 0) {
                let text = this.text.slice(0, this.pos);

                this.setText(text + word);
            } else {
                this.setText(this.text + (this.pos>0?' ':'') + word);
            }
            this.clear();

        }
    }
}
</script>

<style scoped>
.predict>button {
    min-height: 7vh;
    width: 20%;

}
</style>
