<svelte:head>
	<title>About Page</title>
</svelte:head>
<div>
	<h2>What and why</h2>
</div>
<p>
	This project was created by me @SanderSpaas for the course "Web Topics Advanced". In this course
	you pick a variety of technologies you haven't worked with before and make a cool project with it.
	The project was made with Unity (C#) and then build for web deployment into WebGL. The site itself
	was made in svelte, sveltekit and with JAMSTACK in mind. The hosting is done with <a
		href="https://www.netlify.com/">netlify</a
	> which has a lot of great and easely accessibile options available.
</p>
<div>
	<img src="img/editor.png" alt="de unity editor" />
	<p class="description">A generated parking lot in the editor.</p>
	<h2>Generating a parking lot</h2>
</div>
<p>
	This is the first time I dabbeled with generating big predetermined things in Unity. I have made a
	landmass generator before with C# using simplexnoise called project Cyclon but thats a whole
	different thing.
    The generation of the parking lots happens in 2 steps. Firstly the lot itself is created, then the cars are drawn onto it. The code to generate the parking lots is rather messy but it boils down to 2 for loops going over the width and the lenght.
    The cars are spawned in a single foreach that goes through a list of all available parking spots that was filled in earlier by the lot generator.
</p>
<div>
	<img src="img/Drawcars.png" alt="code for generating te cars" />
	<p class="description">The code that places the initial cars on the lot.</p>
</div>
<p>After the cars are placed on the lot a function called "watcher" takes over. This function checks whether more cars have arrived or if cars have left and takes the required action. Watcher uses 2 functions to add or remove cars, these functions use the SmootMover and SmoothRotater functions to smootly move the cars around.</p>
<div>
	<img src="img/Mover.png" alt="code for smooth movement" />
	<p class="description">The 2 functions that allow the cars to move smootly.
    </p>
</div>
<p> When a different parking lot is selected Watcher wipes everything that has been placed and starts anew. To get the initial data on how to draw the parking lot Watcher relies on the webpage itself. At the moment only one way communication is implemented. </p>
<style>
	.description {
		font-style: italic;
	}
	p {
		width: 70vw;
	}

	img {
		width: 100%;
		height: auto;
	}
	div {
		width: 70vw;
		margin: 1em;
		text-align: center;
	}
</style>
