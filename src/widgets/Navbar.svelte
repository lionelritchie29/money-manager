<nav class={`${baseLayoutClass} py-4 flex justify-between items-center`}>
  <div class="flex">
    <div class="font-semibold mr-8">Money Manager</div>

    <ul class="flex space-x-5">
      {#each links as link }
        <li class="hover:font-medium cursor-pointer">{link.title}</li>
      {/each}
    </ul>
  </div>

  <div class="flex items-center">
    <div class="mr-6 text-sm">
      <button class="bg-blue-600 text-white rounded-full py-1 px-4">+ Record</button>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={toggleProfileDropdown} class="flex items-center text-sm cursor-pointer relative">
      <div class="w-10 h-10 rounded-full border bg-gray-300"></div>
      <div class="ml-2">
        <span class="block font-semibold flex items-center">
          <span>Lionel Ritchie</span>
          <span class="block -mt-1 ml-1">&#8964;</span>
        </span>
        <span class="text-xs block text-gray-400">Member</span>
      </div>

      {#if showProfileDropdown}  
        <ul class="absolute min-w-[12rem] shadow top-12 left-0 bg-white rounded border">
          {#each userLinks as link}
            <li>
              <button class="p-4 hover:bg-gray-100 w-full flex items-center">
                <svelte:component class="mr-3" this={link.icon} />
                {link.title}</button>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
</nav>

<div class="border-b border-gray-300"></div>

<script lang='ts'>
  import {AdjustmentsHorizontal, ArrowRightOnRectangle} from 'svelte-heros-v2'

  export let baseLayoutClass: string = '';
  let showProfileDropdown = false;

  const links = [
    {
      title: 'Dashboard'
    },
    {
      title: 'Wallets'
    },
    {
      title: 'Records'
    },
    {
      title: 'Statistics'
    }
  ]

  const userLinks = [
    {
      title: 'Settings',
      icon: AdjustmentsHorizontal
    },
    {
      title: 'Log out',
      icon: ArrowRightOnRectangle
    }
  ]

  const toggleProfileDropdown = () => {
    console.log('run')
    showProfileDropdown = !showProfileDropdown
  }
</script>