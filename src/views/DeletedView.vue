<template>
    <div class="q-pa-md flex justify-center">
        <q-list bordered class="rounded-borders" style="max-width: 100%; width: 500px">
            <q-expansion-item label="Deleted item" caption="A list of tasks deleted">
                <div v-for="todo in todoStore.todos" :key="todo.id">
                    <q-item clickable v-ripple v-if="todo.isDeleted">
                        <q-item-section>
                            <q-item-label lines="1">{{ todo.content }}</q-item-label>
                        </q-item-section>
                    </q-item>
                </div>
            </q-expansion-item>
        </q-list>
    </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todo';

const todoStore = useTodoStore();
</script>
