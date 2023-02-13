<script lang='ts'>
  const records = [1,2,3,4,5,6]
</script>

<section class="flex space-x-4">
  <div class="w-1/4 min-h-[50rem] p-6 bg-white shadow-sm rounded-lg">
    <h1 class="text-2xl font-bold mb-2">Records</h1>

  </div>

  <div class="w-3/4">
    <ul class="grid grid-cols-1 gap-4">
      {#each records as record}
        <li>
          <div class="rounded-lg bg-white shadow-sm h-20">

          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>