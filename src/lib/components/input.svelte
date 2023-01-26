<script>
  export let labelName = "";
  export let value = "";
  export let error = false;
  export let type = "text";
  export let placeholder = '';
  // @ts-ignore
  function typeAction(node) {
    node.type = type;
  }

</script>

<div class="space-y-2 relative">
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
    {labelName}
  </label>
  <input
    class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
    use:typeAction
    placeholder={placeholder}
    bind:value
  />
  {#if error}
    <div class="error">{labelName} is required</div>
  {/if}
</div>
