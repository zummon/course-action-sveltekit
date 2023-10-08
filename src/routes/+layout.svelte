<script>
	import "./styles.css";
	export let data;
</script>

<div
	class="container mx-auto flex flex-wrap items-center justify-between lg:justify-around gap-4 p-4"
>
	<a class="flex items-center gap-2" href="/">
		<img class="w-12 h-12 block" src="/favicon.svg" alt="" />
		<span
			class="font-display block text-lg {data.pathname == '/'
				? 'text-orange-600'
				: 'text-cyan-600'}"
		>
			Studee
		</span>
	</a>
	<div class="flex flex-wrap items-center gap-4 lg:gap-6">
		{#each data.navs as item}
			<a
				class="hidden sm:block font-bold text-lg {item.active
					? 'text-orange-600'
					: 'text-cyan-600'}"
				href={item.href}
			>
				{item.text}
			</a>
		{/each}
		<button class="block sm:hidden text-cyan-800" on:click={() => {}}>
			<!-- hero icon outline bars-3 -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-8 h-8"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</button>
	</div>
</div>

<slot />

<div class="bg-neutral-800">
	<p class="max-w-lg text-center mx-auto text-gray-100 px-4 py-16 font-serif">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est
		error enim quo perspiciatis. Maiores sed expedita non et accusantium. Nisi
		recusandae perspiciatis accusantium cum aperiam incidunt exercitationem
		natus id?
		<a href="https://zummon.page/" class="" target="_blank">
			Made by zummon (Teerapat Anantarattanachai)
		</a>
	</p>
</div>
