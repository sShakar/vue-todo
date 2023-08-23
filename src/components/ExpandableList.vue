<script setup lang="ts">
import { useTodoStore } from '@/stores/todo';
    
const props = defineProps<{ isDeletedPage: boolean }>();

const todoStore = useTodoStore();
</script>

<template>
    <!-- :caption="`${ props.isDeletedPage ? 'A list of tasks finished' : 'A list of tasks deleted' }`" -->
    <div class="q-pa-md flex justify-center">
        <q-list class="rounded-borders" style="max-width: 100%; width: 500px" bordered>
            <q-expansion-item
                :label="props.isDeletedPage ? 'Completed Tasks' : 'Deleted item'"
                :caption="
                    props.isDeletedPage ? 'A list of tasks finished' : 'A list of tasks deleted'
                "
            >
                <div v-for="todo in todoStore.todos" :key="todo.id">
                    <q-item
                        v-if="props.isDeletedPage ? todo.isDone && !todo.isDeleted : todo.isDeleted"
                        v-ripple
                    clickable
                        >
                        <q-item-section>
                            <q-item-label lines="1">{{ todo.content }}</q-item-label>
                        </q-item-section>
                    </q-item>
                </div>
            </q-expansion-item>
        </q-list>
    </div>
</template>
