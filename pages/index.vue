<script setup lang="ts">
const { $client } = useNuxtApp()

const { data: todo, pending, error } = await useAsyncData(() => $client.todo.getTodo.query(Number(1)))

</script>

<template>
  <div>
    {{ todo }}
  </div>
</template>
