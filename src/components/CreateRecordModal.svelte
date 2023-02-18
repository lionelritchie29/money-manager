<script lang='ts'>
	import Modal from "../widgets/Modal.svelte";
</script>

<Modal on:close>
  <span slot="header">Add New Record</span>

  <form method="post" action="?/create">
    <div class="text-sm mt-3">
      <label class="block" for="type">Type</label>
      <select class="border px-2 p-2 w-full rounded mt-1" name="type">
        <option value="expense">Expense</option>
        <option value="Income">Income</option>
      </select>
    </div>

    <div class="text-sm mt-3">
      <label class="block" for="type">Account</label>
      <select class="border px-2 p-2 w-full rounded mt-1" name="type">
        <option value="expense">BCA Xpresi</option>
        <option value="Income">Cash</option>
      </select>
    </div>

    <div class="flex space-x-2 mt-3">
      <div class="text-sm w-2/3">
        <label class="block" for="number">Amount</label>
        <input required class="border p-2 w-full rounded mt-1" type="number" name="amount" value="0" min="0">
      </div>

      <div class="text-sm w-1/3">
        <label class="block" for="currency">Currency</label>
        <select class="border px-2 p-2 w-full rounded mt-1" name="currency">
          <option value="IDR">IDR</option>
          <option value="USD">USD</option>
        </select>
      </div>
    </div>
    
    <div class="flex space-x-2 mt-3">
      <div class="text-sm w-full">
        <label class="block" for="currency">Date</label>
        <input required class="border p-2 w-full rounded mt-1" type="datetime-local" name="date">
      </div>
    </div>

    <div class="flex space-x-2 mt-3">
      <div class="text-sm w-full">
        <label class="block" for="currency">Description</label>
        <input required class="border p-2 w-full rounded mt-1" type="text" name="description">
      </div>
    </div>

    <button disabled type="submit" class="btn btn-success mt-6">Save</button>
  </form>
</Modal>