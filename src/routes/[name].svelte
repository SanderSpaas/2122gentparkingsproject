<script>
	import ParkingData from '/src/components/ParkingData.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	let { name } = $page.params;
	let data;
	onMount(async () => {
		fetch(
			'https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&q=&facet=name&facet=description&refine.name=' +
				name
		)
			.then((response) => response.json())
			.then((response) => {
				data = response;
				console.log(response);
				GlobalUnityInstance.SendMessage('Main Camera', 'getDataFromPage', JSON.stringify(response));
			});
	});
</script>

<svelte:head>
	<title>Infopagina {name}</title>
</svelte:head>

<ParkingData {data} />
<iframe src="/parking.html" scrolling="no" title="parking visualiser" />
