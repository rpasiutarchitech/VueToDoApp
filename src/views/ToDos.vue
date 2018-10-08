<template>
    <div class="to-dos">
        <ToDoList v-bind:toDos="toDos"></ToDoList>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { ToDo } from '../models/ToDo';
    import ToDoElement from '../components/ToDoElement';
    import ToDoList from '../components/ToDoList';

    @Component({
        components: {ToDoList, ToDoElement}
    })
    export default class ToDos extends Vue {
        get toDos(): ToDo[] {
            return [
                {
                    text: 'first todo'
                },
                {
                    text: 'second todo'
                }
            ];
        }
    }
</script>

<style scoped>

</style>
