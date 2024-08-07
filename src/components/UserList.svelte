<script>
  import { onMount } from "svelte";
  import api from '../api.js';
  let users = [];

  onMount(async () => {
    const response = await api.get("/users");
    users = response.data;
  });
</script>

<template>
  <div class="page">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="title">Users</div>
      </div>
    </div>
    <div class="page-content">
      <ul>
        {#each users as user}
          <li><a href={`/users/${user.id}`}>{user.name}</a></li>
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
