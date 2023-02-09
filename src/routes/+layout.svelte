<script>
  import '../styles/app.css'
	import Navbar from '../widgets/Navbar.svelte';

  const baseLayoutClass = 'max-w-7xl mx-auto px-8'
</script>

<div class="root">
  <Navbar {baseLayoutClass}/>  

  <section class={`bg-gray-100 min-h-screen`}>
    <div class={`${baseLayoutClass} pt-8`}>
      <slot></slot>
    </div>
  </section>
</div>
