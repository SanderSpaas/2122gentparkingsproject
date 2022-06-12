<script>
	import CarParkButtons from '/src/components/CarParkButtons.svelte';
	import Parking from '/static/parking.svelte'; //import the parking component
</script>

<svelte:head>
	<title>Main parking page</title>
</svelte:head>

	<div>
		<img src="img/Car.png" alt="Car" />
		<h2>Parking @ Gent</h2>
	</div>
	<p>
		This project was created by me @SanderSpaas for the course "Web Topics Advanced". In this course
		you pick a variety of technologies you haven't worked with before and make a cool project with
		it. Interested in some stats about these parky boyes? Just click the buttons below to let thems
		spill all their secrets. You can look around the lot by left clicking and dragging the mouse.
		Scrolling allows you to zoom in and out.
	</p>

	<CarParkButtons />
	<iframe src="/index.html" scrolling="no" title="parking visualiser" />
	<!-- <Parking /> -->
	<p>
		Ever wanted to see the capacity of the car parks in Ghent visualized in Unity? Wel now you
		can! Just click the buttons above to switch between de available ones. The data is updated every
		minute.
	</p>

<style>
	p {
		width: 70vw;
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
