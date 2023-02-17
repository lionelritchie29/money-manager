<script lang='ts'>
	import { goto } from "$app/navigation";
	import { ChevronLeft, Wallet } from "svelte-heros-v2";
	import UpdateWalletModal from "../../../../components/wallets/UpdateWalletModal.svelte";
	import type { PageData } from "./$types";
  import Swal from 'sweetalert2';
  import axios from 'axios';
  import {PUBLIC_URL} from '$env/static/public'
	import type { ApiResponse } from "../../../../types/Response";
  import toast, {Toaster} from 'svelte-french-toast'

  export let data: PageData;

  let showUpdateModal = false

  const backToWallet = () => {
    goto('/wallets', {replaceState: true})
  }

  const onUpdate = () => {
    showUpdateModal = true;
  }

  const onDelete = async () => {
    const result = await Swal.fire({
      icon: 'question',
      title: 'Confirmation',
      text: 'Are you sure you want to delete this wallet ?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: 'red'
    })
    
    if (result.isConfirmed) {
      const deleteToast = toast.loading('Deleting wallet...');
      const resp = await axios.delete<ApiResponse<null>>(`${PUBLIC_URL}/api/wallets/${data.walletResponse.data.id}`);

      if (resp.data.success) {
        toast.dismiss(deleteToast);
        toast.success('Wallet deleted');
        goto('/wallets', {replaceState: true})
      }
    }
    
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
      <button class="btn btn-primary" on:click={onUpdate}>Edit</button>
      <button class="btn btn-danger" on:click={onDelete}>Delete</button>
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

<Toaster />

{#if showUpdateModal} <UpdateWalletModal wallet={data.walletResponse.data} on:close="{() => showUpdateModal = false}" /> {/if}