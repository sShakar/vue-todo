<!-- this is main html that will be rendered to the view -->
<template>
  <q-layout view="lHh lpR fFf">
    <q-header reveal elevated class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title style="cursor: pointer" @click="router.push('/')">
          TODO simple application
        </q-toolbar-title>

        <q-btn
          flat
          round
          dense
          icon="mdi-delete"
          @click="router.push('/deleted')"
          v-if="route.name !== 'deleted'"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
</script>
