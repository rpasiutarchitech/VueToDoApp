import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { ToDoState } from '@/store/ToDoState';
import { ToDo } from '@/models/ToDo';

Vue.use(Vuex);

export const ADD_TO_DO = 'ADD_TO_DO';

const toDoStore: StoreOptions<ToDoState> = {
    state: {
        toDos: []
    },
    mutations: {
        [ADD_TO_DO](toDoState: ToDoState, payload: ToDo) {
            toDoState.toDos.push(payload);
        }
    },
    actions: {
        [ADD_TO_DO](context, payload: ToDo) {
            setTimeout(function () {
                context.commit(ADD_TO_DO, payload);
            }, 2000);
        }
    }
};

export default new Vuex.Store<ToDoState>(toDoStore);
