<script>
  import '../../../styles/app.css'
  import 'nprogress/nprogress.css';
  import NProgress from 'nprogress';
  import { navigating } from '$app/stores';

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

<slot></slot>