<script>
  // @ts-nocheck
  import { auth } from "../store/store";
  import { onMount } from "svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import "../app.css";

  // @ts-ignore
  onMount(() => {
    const res = localStorage.getItem("user") || null;
    if (res) {
      const data = JSON.parse(res);
      $auth.user = data.user;
      $auth.token = data.token;
    }
  });
</script>

<div class="app">
  <Navbar />
  <slot />
</div>
