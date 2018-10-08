<template>
    <div class="to-do-element">
        <div>{{toDo.text}}</div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { ToDo } from '../models/ToDo';

    @Component
    export default class ToDoElement extends Vue {
        @Prop() private toDo: ToDo;
    }
</script>

<style scoped>
    .to-do-element {
        border: 0.1rem solid black;
        min-height: 2rem;
        padding: 0.2rem;
    }
</style>
