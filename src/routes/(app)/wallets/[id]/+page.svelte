<script lang='ts'>
	import { goto } from "$app/navigation";
	import { ChevronLeft, Wallet } from "svelte-heros-v2";
	import type { PageData } from "./$types";

  export let data: PageData;

  const backToWallet = () => {
    goto('/wallets', {replaceState: true})
  }
</script>

<section class="w-full shadow">
  <div class="rounded-t-lg bg-gray-50 border-b px-6 py-4 flex items-center justify-between">
    <div class="flex space-x-4 items-center">
      <button on:click={backToWallet} class="p-2 border bg-white hover:bg-gray-100 rounded shadow">
        <ChevronLeft class="w-4 h-4" />
      </button>
      <h1 class="text-lg font-bold">Wallet Detail</h1>
    </div>

    <div class="flex space-x-3">
      <button class="btn-primary">Edit</button>
      <button class="btn-danger">Delete</button>
    </div>
  </div>

  <div class="p-10 flex bg-white rounded-b-lg">
    <div>
      <div class="p-3 rounded-lg text-white" style:background={data.walletResponse.data.color}>
        <Wallet class="w-16 h-16" />
      </div>
    </div>

    <div class="text-sm ml-4">
      <div>
        <div class="text-gray-500">Name</div>
        <div class="font-semibold">{data.walletResponse.data.name}</div>
      </div>

      <div class="mt-2">
        <div class="text-gray-500">Type</div>
        <div class="font-semibold">{data.walletResponse.data.type}</div>
      </div>
    </div>
  </div>
</section>