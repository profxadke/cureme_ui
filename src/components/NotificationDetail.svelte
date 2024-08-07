<script>
  import { onMount } from "svelte";
  import api from '../api.js';
  export let notificationId;
  let notification = {};

  onMount(async () => {
    const response = await api.get(`/notifications/${notificationId}`);
    notification = response.data;
  });
</script>

<template>
  <div class="page">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left">
          <a href="#" class="link back" on:click="{() => window.history.back()}">Back</a>
        </div>
        <div class="title">Notification Detail</div>
      </div>
    </div>
    <div class="page-content">
      <h1>{notification.title}</h1>
      <p>{notification.message}</p>
    </div>
  </div>
</template>

<style>
  .page {
    padding: 15px;
  }
</style>
