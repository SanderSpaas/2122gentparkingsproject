<script>
	import CarParkButtons from '/src/components/CarParkButtons.svelte'; //import the parking component
	import Parking from '/static/parking.svelte'; //import the parking component
	
</script>

<main>
	<div><img src="img/Car.png" alt="Car" /></div>

	<p>
		Ever wanted to see the capacity of the car parks in Gent visualized in Unity? <br /> Wel now you
		can! Just click the buttons down below to switch between de available ones. The data is updated every
		minute.
	</p>
	<!-- <Parking /> -->
	<p>
		Interested in some more stats about these parky boyes? Just click the buttons below to let thems
		spill all their secrets.
	</p>
	<CarParkButtons />
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
