<section class="flex space-x-4">
  <div class="w-1/4 min-h-[50rem] p-6 bg-white shadow-sm rounded-lg border">
    <h1 class="text-2xl font-bold mb-2">
      <slot name="title"></slot>

      <div class="mt-4">
        <slot name="side-content"></slot>
      </div>
    </h1>

  </div>

  <div class="w-3/4">
    <slot name="main-content"></slot>
  </div>
</section>