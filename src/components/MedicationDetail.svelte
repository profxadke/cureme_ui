<script>
  import { onMount } from "svelte";
  import api from '../api.js';
  export let medicationId;
  let medication = {};

  onMount(async () => {
    const response = await api.get(`/medications/${medicationId}`);
    medication = response.data;
  });
</script>

<template>
  <div class="page">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left">
          <a href="/" class="link back" on:click="{() => window.history.back()}">Back</a>
        </div>
        <div class="title">Medication Detail</div>
      </div>
    </div>
    <div class="page-content">
      <h1>{medication.name}</h1>
      <p>Description: {medication.description}</p>
      <p>Dosage: {medication.dosage}</p>
    </div>
  </div>
</template>

<style>
  .page {
    padding: 15px;
  }
</style>
