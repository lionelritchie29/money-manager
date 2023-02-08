<script>
  import '../styles/app.css'
	import Navbar from '../widgets/Navbar.svelte';

  const baseLayoutClass = 'max-w-7xl mx-auto px-8'
</script>

<div class="root">
  <Navbar {baseLayoutClass}/>  

  <section class={`${baseLayoutClass} pt-4`}>
    <slot></slot>
  </section>
</div>
