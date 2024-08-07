<script>
  import { onMount } from "svelte";
  import api from '../api.js';
  export let appointmentId;
  let appointment = {};

  onMount(async () => {
    const response = await api.get(`/appointments/${appointmentId}`);
    appointment = response.data;
  });
</script>

<template>
  <div class="page">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left">
          <a href="/" class="link back" on:click="{() => window.history.back()}">Back</a>
        </div>
        <div class="title">Appointment Detail</div>
      </div>
    </div>
    <div class="page-content">
      <h1>{appointment.date} - {appointment.time}</h1>
      <p>Doctor: {appointment.doctor}</p>
      <p>Location: {appointment.location}</p>
    </div>
  </div>
</template>

<style>
  .page {
    padding: 15px;
  }
</style>
