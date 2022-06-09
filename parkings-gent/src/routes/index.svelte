<script>
	 import Parking from "/src/components/Parking.svelte";//import the parking component 

</script>

<main>
    <div><img src="/Car.png" alt="Car"></div>
    
	<p>
		Ever wanted to see the capacity of the parkings in Gent visualized in Unity? <br> Wel now you can!
		Just click the buttons down below to switch between de available ones.
	</p>
    <Parking/>
    <p>
		Interested in some more stats about this parky boyes? Just click the buttons below to let thems spill all their secrets.
	</p>
</main>

<!-- //HTML -->
<style>
	p {
		width: 50vw;
	}
    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 100%;
        height: auto;
    }
    div{
        width: 50vw;
    }
</style>
