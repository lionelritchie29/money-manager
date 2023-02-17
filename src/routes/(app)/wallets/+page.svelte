<script lang='ts'>
  import CreateWalletModal from '../../../components/wallets/CreateWalletModal.svelte';
  import WalletCard from '../../../components/wallets/WalletCard.svelte';
	import SideLayout from '../../../widgets/SideLayout.svelte';
  import type { PageData } from './$types';
  
  export let data: PageData;
  let showCreateModal = false;

  const wallets = data.wallets;
</script>

<SideLayout>
  <span slot="title">Wallets</span>

  <div slot="side-content">
    <button class="btn btn-success" on:click={() => showCreateModal = true}>+ Add Wallet</button>
  </div>

  <ul slot="main-content" class="grid grid-cols-1 gap-4">
    {#each wallets as wallet}
      <li>
        <WalletCard {wallet} />
      </li>
    {/each}
  </ul>
</SideLayout>

{#if showCreateModal} <CreateWalletModal on:close="{() => showCreateModal = false}" /> {/if}