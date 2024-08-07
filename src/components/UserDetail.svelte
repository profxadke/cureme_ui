<script>
  import { onMount } from "svelte";
  import api from '../api.js';
  export let userId;
  let user = {};

  onMount(async () => {
    const response = await api.get(`/users/${userId}`);
    user = response.data;
  });
</script>

<template>
  <div class="page">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left">
          <a href="#" class="link back" on:click="{() => window.history.back()}">Back</a>
        </div>
        <div class="title">User Detail</div>
      </div>
    </div>
    <div class="page-content">
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  </div>
</template>

<style>
  .page {
    padding: 15px;
  }
</style>
