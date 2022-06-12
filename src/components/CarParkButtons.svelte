<script>
	import ParkingData from './ParkingData.svelte';
	let names;
	let data;
	let loading = true;
	fetch(
		'https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&q=&rows=10'
	)
		.then((response) => response.json())
		.then((response) => {
			names = response;
			console.log(response);
			loading = false;
		});
	function getData(name) {
		fetch(
			'https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&q=&facet=name&facet=description&refine.name=' +
				name
		)
			.then((response) => response.json())
			.then((response) => {
				data = response;
				console.log(response);
				GlobalUnityInstance.SendMessage('Main Camera', 'getDataFromPage', JSON.stringify(response));
				loading = false;
			});
	}
</script>

{#if loading === true}
	Loading Parking Names...
{:else}
	<div class="list">
		{#each names.records as record}
			<button on:click={getData(record.fields.name)}>{record.fields.name}</button>
		{/each}
	</div>
{/if}
<ParkingData {data} />

<style type="text/scss">
	button {
		background-color: rgb(79, 155, 220);
		border-radius: 5px;
		color: white;
		width: fit-content;
		padding: 1em;
		font-weight: bold;
		font-family: 'Roboto Mono', monospace;
		white-space: nowrap;
		border: 0px solid;
		margin: 0.25em;
	}
	.list {
		display: flex;
		flex-wrap: wrap;
		width: 70vw;
		justify-content: center;
		padding: 1em;
		box-sizing: border-box;
	}
</style>
