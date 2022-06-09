<script>
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
				loading = false;
			});
		 GlobalUnityInstance.SendMessage( "Main Camera", "getDataFromPage", JSON.stringify(data));
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

{#if data}
<div class="parkingInfo"><div class="titel">
		<h2>{data.records[0].fields.name}</h2>
		
		{#if data.records[0].fields.isopennow}
			<span>Open</span>
		{:else}
			<span class:closed>Closed</span>
		{/if}
	</div>
<p>Last updated on: {data.records[0].fields.lastupdate}</p>
	<p>{data.records[0].fields.description}</p>
	<p>Er zijn momenteel {data.records[0].fields.occupation} van de {data.records[0].fields.availablecapacity} plaatsen bezet. Dat is dus een bezetting van ongeveer {Math.round(data.records[0].fields.occupation /data.records[0].fields.availablecapacity  *100) }%, straf he?</p>
	<p>Ben je geïnteresseerd in de officiële pagina? Klik dan <a href={data.records[0].fields.urllinkaddress}>hier</a>.</p>
	<p>Wilde zagen? Dat kan bij: {data.records[0].fields.operatorinformation}.</p></div>
	
{/if}

<style type="text/scss">
.parkingInfo{
	background-color:rgb(240, 249, 253);
	padding: 1em;
	border-radius: 5px;
	color: #23333a;
	margin-top: 1em;
}
	.titel {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	span {
		background-color: rgb(104, 163, 105);
		color: white;
		padding: 0.5em;
		border-radius: 5px;
		margin-left: 1em;
	}
	.closed {
		background-color: rgb(183, 71, 71);
	}

	.list {
		display: flex;
		flex-wrap: wrap;
		width: 50vw;
		justify-content: center;
	}
	button {
		background-color: rgb(79, 155, 220);
		border-radius: 5px;
		color: white;
		width: fit-content;
		padding: 0.75em;
		font-weight: bold;
		font-family: 'Roboto Mono', monospace;
		white-space: nowrap;
		border: 0px solid;
		margin: 0.25em;
	}
</style>
