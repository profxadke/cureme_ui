<script>
  import { onMount } from "svelte";
  import api from '../api.js';
  let medications = [];

  onMount(async () => {
    const response = await api.get("/medications");
    medications = response.data;
  });
</script>

<template>
  <div class="page">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="title">Medications</div>
      </div>
    </div>
    <div class="page-content">
      <ul>
        {#each medications as medication}
          <li><a href={`/medications/${medication.id}`}>{medication.name}</a></li>
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
