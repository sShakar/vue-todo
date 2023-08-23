<script setup lang="ts">
import ExpandableList from '@/components/ExpandableList.vue';
</script>

<template>
    <div class="flex justify-center">
        <h2>Deleted list</h2>
    </div>

    <ExpandableList :is-deleted-page="false" />
</template>
