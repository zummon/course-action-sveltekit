<script>
</script>

<svelte:head>
	<title>Register</title>
	<meta
		name="description"
		content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. "
	/>
</svelte:head>

<div class="pb-8 sm:pt-8 lg:pb-16 lg:pt-16" style="background-color: #e7e5e4">
	<div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
		<div
			class="md:col-span-2 order-last sm:order-none p-4 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-4"
		>
			<label class="block">
				<span class="block font-bold">E-mail</span>
				<input
					class="block w-full bg-transparent border-t-0 border-x-0 border-b-2"
					type="email"
					placeholder="example@mail.com"
				/>
			</label>
			<label class="block">
				<span class="block font-bold">Name</span>
				<input
					class="block w-full bg-transparent border-t-0 border-x-0 border-b-2"
					type="text"
					placeholder="Teerapat Anan"
				/>
			</label>
			<label class="block md:col-span-2">
				<span class="block font-bold">Type</span>
				<select
					class="block w-full bg-transparent border-t-0 border-x-0 border-b-2"
				>
					{#each ["item-1", "item-2", "item-3"] as item, index (`select-type-${index}`)}
						<option value={item}>{item}</option>
					{/each}
				</select>
			</label>
			<label class="block">
				<span class="block font-bold">Date</span>
				<input
					class="block w-full bg-transparent border-t-0 border-x-0 border-b-2"
					type="date"
				/>
			</label>
			<label class="block">
				<span class="block font-bold">Phone</span>
				<input
					class="block w-full bg-transparent border-t-0 border-x-0 border-b-2"
					type="tel"
					placeholder="0800000000"
				/>
			</label>
			<label class="block md:col-span-2">
				<span class="block font-bold">Message</span>
				<textarea
					class="block w-full bg-transparent border-t-0 border-x-0 border-b-2"
					placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem culpa tempora vero voluptatum doloribus optio animi magnam ut aspernatur"
					rows="5"
				/>
			</label>
			<button
				class="block md:col-span-2 bg-lime-400 text-cyan-800 px-8 py-3 font-bold text-lg shadow-md"
				on:click={() => {}}
			>
				SUBMIT
			</button>
		</div>
		<div class="p-4 lg:p-8 bg-white text-lg font-semibold shadow-md">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem
			culpa tempora vero voluptatum doloribus optio animi magnam ut aspernatur
			porro dicta numquam, officiis neque reiciendis. Culpa numquam cupiditate
			consectetur.
		</div>
	</div>
</div>
