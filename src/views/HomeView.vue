<script setup lang="ts">
import { ref } from 'vue';
import ExpandableList from '@/components/ExpandableList.vue';
import { useTodoStore } from '@/stores/todo';

const todoStore = useTodoStore();

const newTodo = ref<string>('');
const inception = ref<boolean>(false);

function addTodo() {
    if (!newTodo.value) {
        inception.value = true;
        return;
    }

    // store todo value into the state of the app.
    todoStore.addTask(newTodo.value);

    newTodo.value = '';
}
</script>

<template>
    <main>
        <q-page class="q-ma-md q-gutter-md">
            <q-form class="q-mx-none" @submit.prevent="addTodo">
                <q-input v-model="newTodo" label="New TODO" filled value="" name="newTodo" />
            </q-form>

            <div class="flex justify-center">
                <div style="max-width: 100%; width: 500px">
                    <q-intersection v-for="todo in todoStore.todos" :key="todo.id">
                        <q-item v-if="!todo.isDeleted" clickable v-ripple class="q-gutter=xl">
                            <q-item-section avatar>
                                <q-checkbox v-model="todo.isDone" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>{{ todo.content }}</q-item-label>
                            </q-item-section>
                            <q-item-section top side>
                                <div class="text-grey-8 q-gutter-xs">
                                    <q-btn
                                        class="gt-xs"
                                        size="12px"
                                        flat
                                        dense
                                        round
                                        icon="mdi-delete"
                                        @click="todoStore.deleteTask(todo.id)"
                                    />
                                </div>
                            </q-item-section>
                        </q-item>
                    </q-intersection>
                </div>
            </div>

            <ExpandableList is-deleted-page />

            <q-dialog v-model="inception">
                <q-card>
                    <q-card-section>
                        <div class="text-h6">warning</div>
                    </q-card-section>
                    <q-card-section class="q-pt-none">You cannot add empty todo</q-card-section>
                    <q-card-actions align="right" class="text-primary">
                        <q-btn flat label="Close" v-close-popup />
                    </q-card-actions>
                </q-card>
            </q-dialog>
        </q-page>
    </main>
</template>
