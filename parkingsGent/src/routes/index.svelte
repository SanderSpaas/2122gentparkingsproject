<script type="text/javascript">
	import CarParkButtons from '/src/components/CarParkButtons.svelte';
	import Parking from '/static/parking.svelte'; //import the parking component
	// let renderGame = true;
	// // setTimeout(() => {
	// // 	renderGame = true;
	// // }, 5000);
</script>

<main>
	<div><img src="img/Car.png" alt="Car" /></div>
	<p>
		Interested in some stats about these parky boyes? Just click the buttons below to let thems
		spill all their secrets.
	</p>
	<CarParkButtons />
	<p>
		Ever wanted to see the capacity of the car parks in Gent visualized in Unity? <br /> Wel now you
		can! Just click the buttons above to switch between de available ones. The data is updated every
		minute.
	</p>
	<Parking />
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
