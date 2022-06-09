<script>
	//  import Parking from "/src/components/Parking.svelte";//import the parking component
	import Parking from '/static/parking.svelte'; //import the parking component
	import { onMount } from 'svelte';

	onMount(async () => {
		const response = await fetch(
			'https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&q=&rows=10'
		);
		const data = await response.json();
		console.log(data);
	});
</script>

<main>
	<div><img src="img/Car.png" alt="Car" /></div>

	<p>
		Ever wanted to see the capacity of the car parks in Gent visualized in Unity? <br /> Wel now you can!
		Just click the buttons down below to switch between de available ones. The data is updated every minute.
	</p>
	<Parking />
	<p>
		Interested in some more stats about these parky boyes? Just click the buttons below to let thems
		spill all their secrets.
	</p>
</main>

<!-- //HTML -->
<style>
	p {
		width: 50vw;
	}
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	img {
		width: 100%;
		height: auto;
	}
	div {
		width: 33vw;
		margin: 3em;
	}
</style>
