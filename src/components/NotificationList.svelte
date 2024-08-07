<script>
  import { onMount } from "svelte";
  import api from '../api.js';
  let notifications = [];

  onMount(async () => {
    const response = await api.get("/notifications");
    notifications = response.data;
  });
</script>

<template>
  <div class="page">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="title">Notifications</div>
      </div>
    </div>
    <div class="page-content">
      <ul>
        {#each notifications as notification}
          <li><a href={`/notifications/${notification.id}`}>{notification.title}</a></li>
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
