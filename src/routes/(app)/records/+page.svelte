<script lang='ts'>
	import SideLayout from "../../../widgets/SideLayout.svelte";
  import { showCreateRecordModal } from '$lib/utils/create-record';

  const records = [1,2,3,4,5,6]
</script>

<SideLayout>
  <span slot="title">Records</span>

  <div slot="side-content">
    <button class="btn btn-success" on:click={() => $showCreateRecordModal = true}>+ Add Record</button>
  </div>

  <ul slot="main-content" class="grid grid-cols-1 gap-4">
    {#each records as record}
      <li>
        <div class="rounded-lg bg-white shadow-sm h-20">

        </div>
      </li>
    {/each}
  </ul>
</SideLayout>