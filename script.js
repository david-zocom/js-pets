const data = [
	{
		name: 'Cat',
		cuddliness: 5,
		independence: 4,
		likability: 4
	},
	{
		name: 'Crocodile',
		cuddliness: 1,
		independence: 5,
		likability: 2
	},
	{
		name: 'Tortoise',
		cuddliness: 1,
		independence: 3,
		likability: 4
	},
	{
		name: 'Dog',
		cuddliness: 5,
		independence: 2,
		likability: 4
	}
]

// plocka ut petcards - queryselector
// skapa ett card för varje element i listan
// lägga till varje card i DOM

console.log('Hello!');
window.addEventListener('load', () => {
	let petcards = document.querySelector('.petcards');

	// Optional: use higher-order functions instead of normal for loop (forEach or map)
	for(let i=0; i<data.length; i++) {
		let card = document.createElement('div');
		card.classList.add('card');
		// card.className = 'card';  <- gör samma sak som classList men med mindre precision

		let title = document.createElement('div');
		title.classList.add('title');
		title.innerText = data[i].name;
		card.appendChild(title);

		card.appendChild(makePetRating('cuddliness', data[i].cuddliness));
		card.appendChild(makePetRating('independence', data[i].independence));
		card.appendChild(makePetRating('likability', data[i].likability));

		petcards.appendChild(card);
	}

});  // window load

function makePetRating(cssClass, value) {
	let property = document.createElement('div');
	property.classList.add(cssClass);
	property.classList.add('score' + value);
	let letter = cssClass.charAt(0).toUpperCase();  // alternative: substr
	property.innerText = letter + value;
	return property;
}












//
