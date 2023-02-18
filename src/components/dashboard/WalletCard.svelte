<script lang='ts'>
	import { format } from "$lib/currency-formatter";
	import { Wallet as WalletIcon } from "svelte-heros-v2";
	import type { Wallet } from "../../types/Wallet";

  export let wallet: Wallet
</script>

<button class="w-full text-left rounded-lg shadow p-3 hover:shadow-lg" style:background={wallet.color || '#fff'}>
  <div class="flex text-white items-center">
    <div><WalletIcon class="w-8 h-8" /></div>
  
    <div class="ml-4">
      <h2 class="font-medium">{wallet.name}</h2>
      <div class="font-semibold">{format(wallet.currency, wallet.initialBalance)}</div>
    </div>
  </div>
</button>