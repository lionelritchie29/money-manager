<script lang='ts'>
  import WalletCard from '../../../components/wallets/WalletCard.svelte';
	import SideLayout from '../../../widgets/SideLayout.svelte';
import type { PageData } from './$types';
  export let data: PageData;

  const wallets = data.wallets;
</script>

<SideLayout>
  <span slot="title">Wallets</span>

  <div slot="side-content">
    <button class="btn-success">+ Add Wallet</button>
  </div>

  <ul slot="main-content" class="grid grid-cols-1 gap-4">
    {#each wallets as wallet}
      <li>
        <WalletCard {wallet} />
      </li>
    {/each}
  </ul>
</SideLayout>