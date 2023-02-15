<script lang='ts'>
  import WalletCard from '../../components/dashboard/WalletCard.svelte';
import type { PageData } from './$types';
  export let data: PageData;

  const wallets = data.wallets;
  const dummies = [1,2,3,4,5,6];
</script>

<section>
  <h1 class="text-2xl font-bold mb-2">Wallets</h1>
  <ul class="grid grid-cols-4 gap-4">
    {#each wallets as wallet}
      <li>
        <WalletCard {wallet} />
      </li>
    {/each}
  </ul>

  <div class="mt-8"></div>
  <h1 class="text-2xl font-bold mb-2">Overview</h1>
  <ul class="grid grid-cols-3 gap-4">
    {#each dummies as item}
      <li>
        <div class="rounded-lg bg-white h-64 shadow-sm">

        </div>
      </li>
    {/each}
  </ul>
</section>