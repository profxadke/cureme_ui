<script>
  import { onMount } from "svelte";
  import api from '../api.js';
  export let reminderId;
  let reminder = {};

  onMount(async () => {
    const response = await api.get(`/reminders/${reminderId}`);
    reminder = response.data;
  });
</script>

<template>
  <div class="page">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left">
          <a href="/" class="link back" on:click="{() => window.history.back()}">Back</a>
        </div>
        <div class="title">Reminder Detail</div>
      </div>
    </div>
    <div class="page-content">
      <h1>{reminder.message}</h1>
      <p>Date: {reminder.date}</p>
      <p>Time: {reminder.time}</p>
    </div>
  </div>
</template>

<style>
  .page {
    padding: 15px;
  }
</style>
