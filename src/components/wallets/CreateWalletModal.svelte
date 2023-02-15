<script lang='ts'>
	import Modal from "../../widgets/Modal.svelte";
</script>
<Modal on:close>
  <span slot="header">Add Wallet</span>

  <form method="post" action="?/create">
    <div class="flex space-x-2">
      <div class="text-sm w-2/3">
        <label class="block" for="name">Name</label>
        <input required class="border p-2 w-full rounded mt-1" type="text" name="name" placeholder="Name">
      </div>

      <div class="text-sm w-1/3">
        <label class="block" for="color">Color</label>
        <input required class="border w-full h-10" value="#45BD54" type="color" name="color">
      </div>
    </div>

    <div class="text-sm mt-3">
      <label class="block" for="currency">Type</label>
      <select class="border px-2 p-2 w-full rounded mt-1" name="type">
        <option value="Cash">Cash</option>
        <option value="Saving Account">Saving Account</option>
        <option value="Investment">Investment</option>
      </select>
    </div>

    <div class="flex space-x-2 mt-3">
      <div class="text-sm w-2/3">
        <label class="block" for="number">Starting Amount</label>
        <input required class="border p-2 w-full rounded mt-1" type="number" name="initialBalance" value="0" min="0">
      </div>

      <div class="text-sm w-1/3">
        <label class="block" for="currency">Currency</label>
        <select class="border px-2 p-2 w-full rounded mt-1" name="currency">
          <option value="IDR">IDR</option>
          <option value="USD">USD</option>
        </select>
      </div>
    </div>

    <div class="text-sm w-1/3 mt-4">
      <input type="checkbox" name="excludeStat" value="1" id="exclude"/>
      <label for="exclude">
        Exclude from statistics
      </label>
    </div>

    <button type="submit" class="btn-success mt-6">Save</button>
  </form>
</Modal>