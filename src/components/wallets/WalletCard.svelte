<script lang='ts'>
	import { format } from "$lib/currency-formatter";
	import { Wallet as WalletIcon } from "svelte-heros-v2";
  import type { Wallet } from "../../types/Wallet";

  export let wallet: Wallet;
</script>
<div class="rounded-lg bg-white shadow-sm hover:shadow-md py-4 px-6 border">
  <div class="flex justify-between items-center">
    <div class="flex items-center">
      <div class="p-2 rounded-lg" style:background={wallet.color}>
        <WalletIcon class="w-6 h-6 text-gray-100" />
      </div>
      <div class="ml-4 text-gray-500 font-semibold">{wallet.name}</div>
    </div>

    <div class="flex">
      <div class="mr-4">{wallet.type}</div>
      <span class="font-semibold">
        {format(wallet.currency, wallet.initialBalance)}
      </span>
    </div>
  </div>
</div>