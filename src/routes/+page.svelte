<script>
	export let data;
</script>

<svelte:head>
	<title>Course Action</title>
	<meta
		name="description"
		content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda maxime quibusdam, natus doloribus quos omnis numquam aperiam recusandae adipisci aut corrupti, doloremque repudiandae pariatur voluptate laudantium? Nisi assumenda debitis inventore!"
	/>
</svelte:head>

<div class="" style="background-color: #ADB5B8">
	<div
		class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center min-h-[50vh]"
	>
		<div class="p-4 order-last sm:order-none">
			<h1 class="font-display text-xl sm:text-3xl mb-4 text-orange-800">
				Education
			</h1>
			<p class="font-semibold md:text-lg mb-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sequi
				fugit unde tempora sit asperiores?
			</p>
			<button
				class="bg-lime-400 text-cyan-800 px-8 py-3 font-bold text-lg rounded-xl shadow-md"
			>
				Enter
			</button>
		</div>
		<div class="md:col-span-2">
			<img
				class="sm:min-h-[50vh] w-full object-cover"
				src="https://cdn.leonardo.ai/users/a394eb6e-4acd-49c3-87c2-8b3c64d9ea10/generations/5ab525ab-4a17-43c6-9231-23423fa19d1f/variations/Default_sticker_with_white_fat_line_artwork_of_tshirt_graphic_1_5ab525ab-4a17-43c6-9231-23423fa19d1f_1.jpg"
				alt=""
			/>
		</div>
	</div>
</div>

<div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 my-8 gap-4 p-4">
	<div class="">
		<img
			class="rounded-3xl max-h-96 md:max-h-[540px] w-full object-cover object-center block mb-4"
			src="https://cdn.leonardo.ai/users/8567b3e0-d306-4738-8696-4e6c7882d1e1/generations/667ad190-fa37-4692-b9b3-1be4800bc5f4/variations/Default_cinnannoe_hyper_realistic_view_angle_from_the_sky_ultr_3_667ad190-fa37-4692-b9b3-1be4800bc5f4_1.jpg"
			alt=""
		/>
		<h2 class="text-lg sm:text-xl font-bold mb-4">
			Lorem ipsum dolor sit amet, consectetur adipisicing.
		</h2>
		<p class="md:text-lg">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint magni amet
			praesentium est, quibusdam veritatis.
		</p>
	</div>
	<div class="">
		<img
			class="rounded-3xl max-h-80 md:max-h-[480px] w-full object-cover object-top block mb-4"
			src="https://cdn.leonardo.ai/users/07d3c7cd-dc57-4dc1-8598-93a676f0da39/generations/c60ece37-cea0-4baf-8d59-60c4730d99ae/variations/Default_woman_with_long_black_hair_dark_blue_eyes_black_tank_t_1_c60ece37-cea0-4baf-8d59-60c4730d99ae_1.jpg"
			alt=""
		/>
		<h2 class="text-xl sm:text-3xl font-semibold mb-4">
			Lorem ipsum dolor sit amet.
		</h2>
		<p class="md:text-lg">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis sint
			officia accusamus reprehenderit corrupti iste. Quisquam, dolore quaerat
			temporibus magni iste molestias optio animi atque explicabo incidunt,
			consequatur quo eveniet!
		</p>
	</div>
</div>

<div class="my-8" style="background-color: #9a3412">
	<div
		class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4"
	>
		{#each data.steps as item}
			<div class="rounded-3xl bg-white p-4">
				<h3 class="font-display text-xl mb-4 text-cyan-600">{item.headline}</h3>
				<p class="">
					{item.paragraph}
				</p>
			</div>
		{/each}
	</div>
</div>

<div
	class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-8 gap-4 p-4"
>
	<div class="md:col-span-2">
		<img
			class="aspect-video sm:aspect-square md:aspect-video object-cover object-top rounded-3xl"
			src="https://cdn.leonardo.ai/users/6de6155e-4543-4eb4-baaa-e8e26c3ecc7a/generations/c4d53d09-298c-4b04-b2f4-83713d9ea15a/variations/Default_Hand_drawn_in_the_style_of_sketchbook_Full_body_of_a_b_1_c4d53d09-298c-4b04-b2f4-83713d9ea15a_1.jpg"
			alt=""
		/>
	</div>
	<div class="">
		<h3 class="text-lg sm:text-xl mb-4 font-display">
			Lorem ipsum dolor sit amet, consectetur adipisicing.
		</h3>
		<p class="md:text-lg mb-4">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint magni amet
			praesentium est, quibusdam veritatis.
		</p>
		<button
			class="bg-lime-400 text-cyan-800 px-8 py-3 font-bold text-lg rounded-xl shadow-md"
		>
			Enter
		</button>
	</div>
</div>

<div class="pb-8" style="background-color: #A39C92">
	<div class="max-w-5xl mx-auto">
		<h2 class="font-display text-2xl px-4 pt-8 mb-4 text-center">
			Lorem ipsum dolor
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 grid-flow-row mb-8">
			{#each data.concepts as item}
				<div
					class="rounded-3xl bg-white p-4 {item.highlight
						? 'bg-gradient-to-b from-lime-800 to-lime-400 text-white'
						: 'shadow-md'}"
				>
					<h3 class="font-display mb-4">
						{item.headline}
					</h3>
					<p class="">
						{item.paragraph}
					</p>
				</div>
			{/each}
		</div>
		<img
			class="max-h-screen mx-auto"
			src="https://cdn.leonardo.ai/users/85249a80-1341-497c-b3f6-413de1b58f56/generations/5bfcca69-7afd-4d1d-8c55-266bf1f058fc/variations/Default_Hand_drawn_in_the_style_of_sketchbook_Full_body_of_a_b_3_5bfcca69-7afd-4d1d-8c55-266bf1f058fc_1.jpg"
			alt=""
		/>
	</div>
</div>
