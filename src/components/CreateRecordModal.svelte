<script lang='ts'>
	import type { Wallet } from "../types/Wallet";
	import Modal from "../widgets/Modal.svelte";

  export let userWallets: Wallet[] = [];

  let type: string = 'Expense';
  let walletId: string = userWallets[0].id;
  let amount : number = 0;
  let currency: string = 'IDR';
  let date: Date = new Date();
  let description: string = '';

  const createRecord = async () => {
    console.log({type, walletId, amount, currency, date, description})
  }
</script>

<Modal on:close>
  <span slot="header">Add New Record</span>

  <form on:submit={createRecord}>
    <div class="text-sm mt-3">
      <label class="block" for="type">Type</label>
      <select bind:value={type} class="border px-2 p-2 w-full rounded mt-1" name="type">
        <option value="Expense">Expense</option>
        <option value="Income">Income</option>
      </select>
    </div>

    <div class="text-sm mt-3">
      <label class="block" for="type">Wallet</label>
      <select bind:value={walletId} class="border px-2 p-2 w-full rounded mt-1" name="walletId">
        {#each userWallets as wallet}
          <option value={wallet.id}>{wallet.name}</option>
        {/each}
      </select>
    </div>

    <div class="flex space-x-2 mt-3">
      <div class="text-sm w-2/3">
        <label class="block" for="number">Amount</label>
        <input bind:value={amount} required class="border p-2 w-full rounded mt-1" type="number" name="amount" min="0">
      </div>

      <div class="text-sm w-1/3">
        <label class="block" for="currency">Currency</label>
        <select bind:value={currency} class="border px-2 p-2 w-full rounded mt-1" name="currency">
          <option value="IDR">IDR</option>
          <option value="USD">USD</option>
        </select>
      </div>
    </div>
    
    <div class="flex space-x-2 mt-3">
      <div class="text-sm w-full">
        <label class="block" for="currency">Date</label>
        <input bind:value={date} required class="border p-2 w-full rounded mt-1" type="datetime-local" name="date">
      </div>
    </div>

    <div class="flex space-x-2 mt-3">
      <div class="text-sm w-full">
        <label class="block" for="currency">Description</label>
        <input bind:value={description} required class="border p-2 w-full rounded mt-1" type="text" name="description">
      </div>
    </div>

    <button type="submit" class="btn btn-success mt-6">Save</button>
  </form>
</Modal>