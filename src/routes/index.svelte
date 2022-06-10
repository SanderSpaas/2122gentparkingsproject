<script type="text/javascript">
	import CarParkButtons from '/src/components/CarParkButtons.svelte';
	import Parking from '/static/parking.svelte'; //import the parking component
	// let renderGame = true;
	// // setTimeout(() => {
	// // 	renderGame = true;
	// // }, 5000);
</script>

<main>
	<div><img src="img/Car.png" alt="Car" /><h2>Parking @ Gent</h2></div>
	<p>
		This project was created by me @SanderSpaas for the course "Web Topics Advanced". In this course
		you pick a variety of technologies you haven't worked with before and make a cool project with
		it. Interested in some stats about these parky boyes? Just click the buttons below to let thems
		spill all their secrets.
	</p>
	
	<CarParkButtons />
	<Parking />
	<p>
		Ever wanted to see the capacity of the car parks in Gent visualized in Unity? <br /> Wel now you
		can! Just click the buttons above to switch between de available ones. The data is updated every
		minute.
	</p>

</main>

<!-- //HTML -->
<style>
	p {
		width: 70vw;
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
		margin: 1em;
		text-align: center;
	}
</style>
