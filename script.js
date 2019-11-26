const data = [
	{
		name: 'cat',
		cuddliness: 5,
		independence: 4,
		likability: 4
	},
	{
		name: 'crocodile',
		cuddliness: 1,
		independence: 5,
		likability: 2
	},
	{
		name: 'Tortoise',
		cuddliness: 1,
		independence: 3,
		likability: 4
	}
]

// plocka ut petcards - queryselector
// skapa ett card för varje element i listan
// lägga till varje card i DOM

console.log('Hello!');
let petcards = document.querySelector('.petcards');

for(let i=0; i<data.length; i++) {
	let card = document.createElement('div');
	card.classList.add('card');
	// card.className = 'card';  <- gör samma sak som classList men med mindre precision
	card.innerText = 'CARD TEST';
	console.log('inuti for-loopen', card);

	petcards.appendChild(card);
}

/*
<div class="card">
	<div class="title">
		Tortoise
	</div>
	<div class="cuddliness">1 </div>
	<div class="independence">3 </div>
	<div class="likability">4 </div>
</div>
*/











//
