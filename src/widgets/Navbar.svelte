<nav class={`${baseLayoutClass} py-4 flex justify-between items-center`}>
  <div class="flex">
    <div class="font-semibold mr-8 flex"> <Wallet class="mr-2" /> Money Manager</div>

    <ul class="flex space-x-5">
      {#each links as link }
        <li class={`hover:text-blue-600 font-medium cursor-pointer ${$page.route.id === link.href ? 'text-blue-600' : ''}`}>
          <a href={link.href}>{link.title}</a>
        </li>
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
  import {AdjustmentsHorizontal, ArrowRightOnRectangle, Wallet} from 'svelte-heros-v2'
  import {page} from '$app/stores'

  export let baseLayoutClass: string = '';
  let showProfileDropdown = false;
  console.log({page: $page})

  const links = [
    {
      title: 'Dashboard',
      href: '/'
    },
    {
      title: 'Wallets',
      href: '/wallets'
    },
    {
      title: 'Records',
      href: '/records'
    },
    {
      title: 'Statistics',
      href: '/statistics'
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