<script lang='ts'>
	import type { Wallet } from "../../types/Wallet";
	import Modal from "../../widgets/Modal.svelte";

  export let wallet: Wallet;
</script>

<Modal on:close>
  <span slot="header">Edit Wallet</span>

  <form method="post" action="?/edit">
    <div class="flex space-x-2">
      <div class="text-sm w-2/3">
        <label class="block" for="name">Name</label>
        <input value={wallet.name} required class="border p-2 w-full rounded mt-1" type="text" name="name" placeholder="Name">
      </div>

      <div class="text-sm w-1/3">
        <label class="block" for="color">Color</label>
        <input value={wallet.color} required class="border w-full h-10" type="color" name="color">
      </div>
    </div>

    <div class="text-sm mt-3">
      <label class="block" for="currency">Type</label>
      <select value={wallet.type} class="border px-2 p-2 w-full rounded mt-1" name="type">
        <option value="Cash">Cash</option>
        <option value="Saving Account">Saving Account</option>
        <option value="Investment">Investment</option>
      </select>
    </div>

    <div class="flex space-x-2 mt-3">
      <div class="text-sm w-2/3">
        <label class="block" for="number">Starting Amount</label>
        <input required class="border p-2 w-full rounded mt-1" type="number" name="initialBalance" value={wallet.initialBalance} min="0">
      </div>

      <div class="text-sm w-1/3">
        <label class="block" for="currency">Currency</label>
        <select value={wallet.currency} class="border px-2 p-2 w-full rounded mt-1" name="currency">
          <option value="IDR">IDR</option>
          <option value="USD">USD</option>
        </select>
      </div>
    </div>

    <div class="text-sm w-1/3 mt-4">
      <input checked={wallet.excludeFromStatistic} type="checkbox" name="excludeStat" value="1" id="exclude"/>
      <label for="exclude">
        Exclude from statistics
      </label>
    </div>

    <button disabled type="submit" class="btn mt-6">Update</button>
  </form>
</Modal>