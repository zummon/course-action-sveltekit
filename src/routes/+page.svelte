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

<div class="" style="">
	<div
		class="grid grid-cols-1 sm:grid-cols-2 items-center min-h-[50vh]"
	>
		<div class="order-last sm:order-none p-4 xl:p-8">
			<div class="max-w-md ml-auto">
				<h1 class="font-black text-xl sm:text-3xl xl:text-5xl mb-4 text-orange-800">
					Education
				</h1>
				<p class="font-semibold md:text-lg mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sequi
					fugit unde tempora sit asperiores?
				</p>
				<a
					class="inline-block bg-lime-400 text-cyan-800 px-8 py-3 font-bold text-lg rounded-xl shadow-md"
					href="/course"
				>
					Read
				</a>
			</div>
		</div>
		<div class="overflow-hidden">
			<!-- https://cdn.leonardo.ai/users/686b8ba4-ad0f-40a5-82ac-0cf838e78534/generations/f2261de5-ade5-44a5-93f0-92e5fd89460d/Default_AbubakarWow_its_a_beautiful_bluewinged_bird_Lets_go_cl_0.jpg -->
			<img
				class="sm:min-h-[50vh] w-full object-cover"
				src="https://i.imgur.com/MbPwr5h.jpeg"
				alt=""
			/>
		</div>
	</div>
</div>

<div
	class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 my-8 gap-4 xl:gap-8 p-4 xl:p-8"
>
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
		class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8 p-4 xl:p-8"
	>
		{#each data.steps as item}
			<div class="rounded-3xl bg-white p-4">
				<h3 class="font-black text-xl mb-4 text-cyan-600">{item.headline}</h3>
				<p class="">
					{item.paragraph}
				</p>
			</div>
		{/each}
	</div>
</div>

<div
	class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-8 gap-4 xl:gap-8 p-4 xl:p-8"
>
	<div class="md:col-span-2">
		<img
			class="aspect-video sm:aspect-square md:aspect-video object-cover object-top rounded-3xl"
			src="https://cdn.leonardo.ai/users/6de6155e-4543-4eb4-baaa-e8e26c3ecc7a/generations/c4d53d09-298c-4b04-b2f4-83713d9ea15a/variations/Default_Hand_drawn_in_the_style_of_sketchbook_Full_body_of_a_b_1_c4d53d09-298c-4b04-b2f4-83713d9ea15a_1.jpg"
			alt=""
		/>
	</div>
	<div class="">
		<h3 class="text-lg sm:text-xl mb-4 font-black">
			Lorem ipsum dolor sit amet, consectetur adipisicing.
		</h3>
		<p class="md:text-lg mb-4">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint magni amet
			praesentium est, quibusdam veritatis.
		</p>
		<a
			class="inline-block bg-lime-400 text-cyan-800 px-8 py-3 font-bold text-lg rounded-xl shadow-md"
			href="/register"
		>
			Enter
		</a>
	</div>
</div>

<div class="pb-8 xl:pb-16" style="background-color: #A39C92">
	<div class="max-w-7xl mx-auto">
		<h2 class="font-black text-2xl px-4 pt-8 mb-4 text-center">
			Lorem ipsum dolor
		</h2>
		<div
			class="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-8 p-4 xl:p-8 grid-flow-row mb-8"
		>
			{#each data.concepts as item}
				<div
					class="rounded-3xl bg-white p-4 {item.highlight
						? 'bg-gradient-to-b from-lime-800 to-lime-400 text-white'
						: 'shadow-md'}"
				>
					<h3 class="font-black mb-4">
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
