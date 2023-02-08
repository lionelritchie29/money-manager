<script lang='ts'>
  export let baseLayoutClass: string = '';

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
</script>

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

    <div class="flex items-center text-sm cursor-pointer">
      <div class="w-10 h-10 rounded-full border bg-gray-300"></div>
      <div class="ml-2">
        <span class="block font-semibold flex items-center">
          <span>Lionel Ritchie</span>
          <span class="block -mt-1 ml-1">&#8964;</span>
        </span>
        <span class="text-xs block text-gray-400">Member</span>
      </div>
    </div>
  </div>
</nav>

<div class="border-b border-gray-300"></div>