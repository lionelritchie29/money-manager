<script lang='ts'>
	import SideLayout from "../../../widgets/SideLayout.svelte";
  import { showCreateRecordModal } from '$lib/utils/create-record';
	import type { PageData } from "./$types";
  import RecordCard from '../../../components/records/RecordCard.svelte'

  export let data: PageData;
  const records = data.recordResponse.data
</script>

<SideLayout>
  <span slot="title">Records</span>

  <div slot="side-content">
    <button class="btn btn-success" on:click={() => $showCreateRecordModal = true}>+ Add Record</button>
  </div>

  <ul slot="main-content" class="grid grid-cols-1 gap-4">
    {#each records as record}
      <li>
        <RecordCard {record} wallets={data.userWalletsResponse.data}/>
      </li>
    {/each}
  </ul>
</SideLayout>