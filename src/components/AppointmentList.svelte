<script>
  import { onMount } from "svelte";
  import api from '../api.js';
  let appointments = [];

  onMount(async () => {
    const response = await api.get("/appointments");
    appointments = response.data;
  });
</script>

<template>
  <div class="page">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="title">Appointments</div>
      </div>
    </div>
    <div class="page-content">
      <ul>
        {#each appointments as appointment}
          <li><a href={`/appointments/${appointment.id}`}>{appointment.date} - {appointment.time}</a></li>
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
