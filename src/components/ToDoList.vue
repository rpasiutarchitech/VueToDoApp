<template>
    <div class="to-do-list">
        <h1 v-if="toDos.length == 0">List is empty</h1>
        <ToDoElement v-else class="to-do-element" v-for="toDo in toDos" v-bind:toDo="toDo"></ToDoElement>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { ToDo } from '../models/ToDo';
    import ToDoElement from './ToDoElement';
    @Component({
        components: {ToDoElement}
    })
    export default class ToDoList extends Vue {
        @Prop() toDos: ToDo[];
    }
</script>

<style scoped lang="scss">
    .to-do-list {
        width: 20rem;
        margin: auto;
    }

    .to-do-element {
        margin-bottom: 1rem;
    }
</style>
