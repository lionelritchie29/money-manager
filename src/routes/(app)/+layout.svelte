<script lang='ts'>
  import '../../styles/app.css';
  import 'nprogress/nprogress.css';
	import Navbar from '../../widgets/Navbar.svelte';
  import NProgress from 'nprogress';
  import type { LayoutData } from './$types';
  import { currentUser } from '$lib/auth';
  import { navigating } from '$app/stores';
  
  export let data: LayoutData;
  currentUser.set(data.user);
  
  const baseLayoutClass = 'max-w-7xl mx-auto px-8'

  NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.2
	});
 
	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>

<div class="root">
  <Navbar userWallets={data.userWalletsResponse.data} {baseLayoutClass}/>  

  <section class={`bg-gray-100 min-h-screen`}>
    <div class={`${baseLayoutClass} pt-8`}>
      <slot></slot>
    </div>
  </section>
</div>
