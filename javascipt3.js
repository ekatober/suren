var name = [
	'bubik',
	'chia',
	'plak plak',
	'We',
	'Cherry',
	'Candy',
	'Cucumber',
	'Cheburashka',
	'Ultra Turbo 3000',
	'Suren XXX',
	'Sub OG',
	'Fatality',
	'6 feet',
	'Kubik Rubik',
	'Herlum tomato',
	'Electric socket',
	'Bazuk',
	'Bling Bling',
	''
]

function newName() {
		var randomNumber = Math.floor(Math.random() * (name.length));
		document.getElementById('nameDisplay').innerHTML = name[randomNumber];
	}
	
