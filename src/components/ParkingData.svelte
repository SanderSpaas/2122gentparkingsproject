<script>
	 export let data;
</script>

{#if data}
	<div class="parkingInfo">
		<div class="titel">
			<h2>{data.records[0].fields.name}</h2>
			{#if data.records[0].fields.isopennow}
				<span>Open</span>
			{:else}
				<span class="closed">Closed</span>
			{/if}
		</div>
		<p>Last updated on: {data.records[0].fields.lastupdate}</p>
		<p>{data.records[0].fields.description}</p>
		<p>
			Er zijn momenteel {data.records[0].fields.totalcapacity -
				data.records[0].fields.availablecapacity} van de {data.records[0].fields.totalcapacity} plaatsen
			bezet. Dat is dus een bezetting van ongeveer {Math.round(
				((data.records[0].fields.totalcapacity - data.records[0].fields.availablecapacity) /
					data.records[0].fields.totalcapacity) *
					100 *
					100
			) / 100}%, straf he?
		</p>
		<p>
			Er zijn dus nog {data.records[0].fields.availablecapacity} plaatskes over.
		</p>
		<p>
			Ben je geïnteresseerd in de officiële pagina? Klik dan <a
				href={data.records[0].fields.urllinkaddress}>hier</a
			>.
		</p>
		<p>
			Ben je geïnteresseerd in de niet-officiële pagina? Klik dan <a
				href="/{data.records[0].fields.name}">hier</a
			>.
		</p>

		<p>Wilde zagen? Dat kan bij: {data.records[0].fields.operatorinformation}.</p>
	</div>
{:else}
	<p>Currently displaying showmode Vroeemmmm... 🚗🚓🚙</p>
{/if}

<style>
	.parkingInfo {
		background-color: rgb(240, 249, 253);
		padding: 1em;
		border-radius: 5px;
		margin: 1em;
		width: 70vw;
		box-sizing: border-box;
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

</style>
