<template>
    <div class="to-do-create">
        <div>
            <textarea v-model="toDoText"></textarea>
        </div>
        <div>
            <button @click="createToDo">Create</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { ADD_TO_DO } from '../store/store';

    @Component({
        data: function () {
            return {
                toDoText: ''
            }
        }
    })
    export default class ToDoCreate extends Vue {
        toDoText: string;

        createToDo() {
            this.$store.commit(ADD_TO_DO, {
                text: this.toDoText
            });
            this.$router.push('/todos');
        }
    }
</script>

<style scoped>

</style>
