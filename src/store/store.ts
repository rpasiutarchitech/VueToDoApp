import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { ToDoState } from '@/store/ToDoState';
import { ToDo } from '@/models/ToDo';

Vue.use(Vuex);

export const ADD_TO_DO = 'ADD_TO_DO';

const toDoStore: StoreOptions<ToDoState> = {
    state: {
        toDos: [
            {
                text: 'first toDo'
            },
            {
                text: 'second toDo'
            },
            {
                text: 'third toDo'
            }
        ]
    },
    mutations: {
        [ADD_TO_DO](toDoState: ToDoState, payload: ToDo) {
            toDoState.toDos.push(payload);
        }
    }
};

export default new Vuex.Store<ToDoState>(toDoStore);
