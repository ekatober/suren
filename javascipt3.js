var name = [
	'80s style',
	'90s babe style',
	'playboy house style',
	'opposit sex dress up',
	'weirdo style',
	'glamour',
	'beach style',
	'with wigs',
	'swagalishious style',
	'victorian style',
	'italian style',
	'french style',
	'hippie style',
	'japanese style',
	'british style',
	'disco style',
	'furcoats',
	'talk with sexy voice',
	'nazi style',
	'berlin style',
	'miami style',
	'hawaii style',
	'anime club',
	'sc8er style',
	'heroin chic style',
	'burning man style',
	'mad max style',
	'50s housewives style',
	'tin foil hats',
	'futuristic style',
	'camp style',
	'animal style'

]

function newName() {
		var randomNumber = Math.floor(Math.random() * (name.length));
		document.getElementById('nameDisplay').innerHTML = name[randomNumber];
	}
	
