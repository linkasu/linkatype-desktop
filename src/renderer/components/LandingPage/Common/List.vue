<template>
    <div class=" list">
        <button v-for="(element, index) in elements"  draggable="true" class='btn form-control' :class="{'btn-success':current==index}" @click="choose({index, element:elements[index]});" @contextmenu="choose({index, element:elements[index]}, true);" ondragstart='return true' >{{element.text}}</button>
        <button v-if="add!=null" class='btn form-control' @click="add()">Добавить</button>
    </div>
</template>

<script>
export default {
  props: {
    elements: {
      required: true
    },
    current: {
      default: null
    },
    drop: {
      default: () => {}
    },
    choose: {
      required: true
    },
    add: {
      default: null
    }
  }
};
</script>

<style >
.memory > .list {
  top: 25vh;
  height: 70vh;
  position: absolute;
  width: 50%;
  overflow-y: scroll;
  padding-left: 1vw;
  padding-right: 1vw;
  padding-top: 1vw;
  background: #fafafa;
}
</style>

