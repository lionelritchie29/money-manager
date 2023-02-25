<script lang='ts'>
	import { format } from "$lib/currency-formatter";
	import type { Record } from "../../types/Record";
	import type { Wallet } from "../../types/Wallet";
	import { Wallet as WalletIcon } from "svelte-heros-v2";

  export let record: Record;
  export let wallets: Wallet[]
  
  console.log({wallets})
</script>

<button on:click={() => {}} class="w-full rounded-lg bg-white shadow-sm hover:shadow-md py-4 px-6 border">
  <div class="flex justify-between items-center">
    <div class="flex items-center">
      <div>
        <WalletIcon class="h-5 w-5" />
      </div>
      <div 
        class={`ml-4 text-gray-500 font-semibold` }>
          {wallets.find(w => w.id == record.walletId)?.name ?? 'Invalid Wallet'}
      </div>
    </div>

    <div class="flex">
      <div class="mr-4">{record.description}</div>
      <span class={`font-semibold ${record.type === 'Expense' ? 'text-red-500' : 'text-green-500'}`}>
        {format(record.currency, record.amount)}
      </span>
    </div>
  </div>
</button>