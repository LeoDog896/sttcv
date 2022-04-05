<script lang="ts">
  export let count: number = 0;
</script>

<button
  on:click={() => count += 1}
  class="rounded-full py-4 px-8 border-2 border-transparent outline-none w-48 tabular-nums focus:border-opacity-100"
>
  Clicks: {count}
</button>

<style>
  button {
    background: rgba(var(--svelte-rgb), 0.05);
  }

  button:active {
    background: rgba(var(--svelte-rgb), 0.15);
  }
</style>