<script lang='ts'>
	import { format } from '$lib/currency-formatter';
  import WalletCard from '../../components/dashboard/WalletCard.svelte';
  import type { PageData } from './$types';
  export let data: PageData;

  const userWalletsResponse = data.userWalletsResponse
  const summaries = [
    {
      title: 'Total Expense',
      amount: data.expenseTotal,
      color: 'text-red-500'
    },
    {
      title: 'Total Income',
      amount: data.incomeTotal,
      color: 'text-green-500'
    },
    {
      title: 'Net Value',
      amount: data.netTotal,
      color: data.netTotal > 0 ? 'text-green-500' : 'text-red-500'
    }
  ];
</script>

<section>
  <h1 class="text-2xl font-bold mb-3">Wallets</h1>
  <ul class="grid grid-cols-4 gap-4">
    {#each userWalletsResponse.data as wallet}
      <li>
        <WalletCard {wallet} />
      </li>
    {/each}
  </ul>

  <div class="mt-10"></div>
  <h1 class="text-2xl font-bold mb-3">Overview</h1>
  <ul class="grid grid-cols-3 gap-4">
    {#each summaries as summary}
      <li>
        <div class="rounded-lg bg-white shadow-sm">
          <div class="p-4">{summary.title}</div>
          
          <div class={`text-xl px-4 pb-8 font-semibold ${summary.color}`}>
            {format('IDR', summary.amount)}
          </div>
        </div>
      </li>
    {/each}
  </ul>
</section>