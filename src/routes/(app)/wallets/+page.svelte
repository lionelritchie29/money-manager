<script lang='ts'>
  import WalletCard from '../../../components/wallets/WalletCard.svelte';
import type { PageData } from './$types';
  export let data: PageData;

  const wallets = data.wallets;
</script>

<section class="flex space-x-4">
  <div class="w-1/4 min-h-[50rem] p-6 bg-white shadow-sm rounded-lg">
    <h1 class="text-2xl font-bold mb-2">Wallets</h1>

  </div>

  <div class="w-3/4">
    <ul class="grid grid-cols-1 gap-4">
      {#each wallets as wallet}
        <li>
          <WalletCard {wallet} />
        </li>
      {/each}
    </ul>
  </div>
</section>