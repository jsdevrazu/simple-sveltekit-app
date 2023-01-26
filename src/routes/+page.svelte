<script>
// @ts-nocheck
  import Seo from "$lib/components/seo.svelte";
  import { auth } from '../store/store'

</script>

<section class="px-28">
  <div class="absolute top-[35%] left-[50%] translate-x-[-50%] translate-y-[50%]">
    <h1 class="text-3xl font-bold underline mb-3">I'm form Home Page</h1>
    {#if $auth.token}
    <div class="flex flex-col justify-center items-center">
      <p>User logged</p>
      <p>User Email: {$auth?.user.email}</p>
      <p>User Full Name: {$auth?.user?.fullName}</p>
    </div>
  {/if}
  </div>
</section>

<Seo title="My App - Home" />
