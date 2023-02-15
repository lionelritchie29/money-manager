<script lang='ts'>
	import { createEventDispatcher } from 'svelte';
	import { XMark } from 'svelte-heros-v2';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal: any;

	const handle_keydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			close();
			return;
		}
	};
</script>

<svelte:window on:keydown={handle_keydown}/>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="modal-background" on:click={close}></div>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
	<div class="flex justify-between p-5 border-b">
		<h2 class="font-semibold"><slot name="header"></slot></h2>

		<button on:click={close}>
			<XMark />
		</button>
	</div>
	
	<div class="p-5">
		<slot></slot>
	</div>
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
	}

	.modal {
		position: absolute;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 32em;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%,-50%);
		border-radius: 0.2em;
		background: white;
	}

	button {
		display: block;
	}
</style>