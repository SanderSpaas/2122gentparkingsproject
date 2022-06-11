<script>
	var GlobalUnityInstance = null;
</script>

<header>
	<h1>Parking @ Gent</h1>
	<nav>
		<a href="/">How it was made</a>
	</nav>
</header>
<slot />
<footer>Made by Sander Spaas with: Svelte, Unity and Jamstack in mind.</footer>


<!-- /src/routes/__layout.svelte -->
<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap');

	header {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid lightgray;
		padding-left: 4vw;
		padding-right: 4vw;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h1 {
		font-size: 25px;
		background-color: rgb(79, 155, 220);
		border-radius: 5px;
		padding: 0.5em;
		color: white;
	}
	footer {
		background-color: rgb(79, 155, 220);
		height: 7vh;
		display: flex;
		color: white;
		align-items: center;
		justify-content: center;
		margin-top: 5em;
	}
</style>
