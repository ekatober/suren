var guestName = [
	'Bubik',
	'Chiaboss',
	'Plak plak',
	'Westerblock',
	'Cherrypie',
	'Candyflipper',
	'Kukumber',
	'Cheburashka',
	'Ultra Turbo 3000',
	'Sub OG',
	'Fatality',
	'6 feet',
	'Kubik Rubik',
	'Herlum',
	'Bazuk',
	'Bling Bling',
	'Burzhuk',
	'Klooper',
	'Sedative',
	'Quack',
	'Sly',
	'Wonky Derek',
	'Bloopster',
	'Gjorbik',
	'Kisonka',
	'Locomotron',
	'Boopinator',
	'Rascalion',
	'Moonbooster',
	'Cataclysmikaiser',
	'Orangutop',
	'Gorrillatron',
	'Jaguarabot'
	
]

function newName() {
		var randomNumber = Math.floor(Math.random() * (guestName.length));
		document.getElementById('nameDisplay').innerHTML = guestName[randomNumber];
	}
	
