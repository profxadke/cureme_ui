<script>
  import { onMount } from "svelte";
  import api from '../api.js';
  let reminders = [];

  onMount(async () => {
    const response = await api.get("/reminders");
    reminders = response.data;
  });
</script>

<template>
  <div class="page">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="title">Reminders</div>
      </div>
    </div>
    <div class="page-content">
      <ul>
        {#each reminders as reminder}
          <li><a href={`/reminders/${reminder.id}`}>{reminder.message}</a></li>
        {/each}
      </ul>
    </div>
  </div>
</template>

<style>
  .page {
    padding: 15px;
  }
</style>
