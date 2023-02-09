<script lang='ts'>
  const wallets = [1,2,3,4]
  const dummies = [1,2,3,4,5,6];
</script>

<section>
  <h1 class="text-2xl font-bold">Wallets</h1>
  <ul class="grid grid-cols-4 gap-4 mt-2">
    {#each wallets as wallet}
      <li>
        <div class="rounded-lg bg-white h-24 shadow-sm">

        </div>
      </li>
    {/each}
  </ul>

  <div class="mt-8"></div>
  <h1 class="text-2xl font-bold">Overview</h1>
  <ul class="grid grid-cols-3 gap-4 mt-2">
    {#each dummies as item}
      <li>
        <div class="rounded-lg bg-white h-64 shadow-sm">

        </div>
      </li>
    {/each}
  </ul>
</section>