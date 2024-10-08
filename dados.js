const listaDePokemons = [
    ["001", "Bulbasaur", "Grass", "Poison"],
    ["002", "Ivysaur", "Grass", "Poison"],
    ["003", "Venusaur", "Grass", "Poison"],
    ["004", "Charmander", "Fire", 0],
    ["005", "Charmeleon", "Fire", 0],
    ["006", "Charizard", "Fire", "Flying"],
    ["007", "Squirtle", "Water", 0],
    ["008", "Wartortle", "Water", 0],
    ["009", "Blastoise", "Water", 0],
    ["010", "Caterpie", "Bug", 0],
    ["011", "Metapod", "Bug", 0],
    ["012", "Butterfree", "Bug", "Flying"],
    ["013", "Weedle", "Bug", "Poison"],
    ["014", "Kakuna", "Bug", "Poison"],
    ["015", "Beedrill", "Bug", "Poison"],
    ["016", "Pidgey", "Normal", "Flying"],
    ["017", "Pidgeotto", "Normal", "Flying"],
    ["018", "Pidgeot", "Normal", "Flying"],
    ["019", "Rattata", "Normal", 0],
    ["020", "Raticate", "Normal", 0],
    ["021", "Spearow", "Normal", "Flying"],
    ["022", "Fearow", "Normal", "Flying"],
    ["023", "Ekans", "Poison", 0],
    ["024", "Arbok", "Poison", 0],
    ["025", "Pikachu", "Electric", 0],
    ["026", "Raichu", "Electric", 0],
    ["027", "Sandshrew", "Ground", 0],
    ["028", "Sandslash", "Ground", 0],
    ["029", "Nidoran♀", "Poison", 0],
    ["030", "Nidorina", "Poison", 0],
    ["031", "Nidoqueen", "Poison", "Ground"],
    ["032", "Nidoran♂", "Poison", 0],
    ["033", "Nidorino", "Poison", 0],
    ["034", "Nidoking", "Poison", "Ground"],
    ["035", "Clefairy", "Fairy", 0],
    ["036", "Clefable", "Fairy", 0],
    ["037", "Vulpix", "Fire", 0],
    ["038", "Ninetales", "Fire", 0],
    ["039", "Jigglypuff", "Normal", "Fairy"],
    ["040", "Wigglytuff", "Normal", "Fairy"],
    ["041", "Zubat", "Poison", "Flying"],
    ["042", "Golbat", "Poison", "Flying"],
    ["043", "Oddish", "Grass", "Poison"],
    ["044", "Gloom", "Grass", "Poison"],
    ["045", "Vileplume", "Grass", "Poison"],
    ["046", "Paras", "Bug", "Grass"],
    ["047", "Parasect", "Bug", "Grass"],
    ["048", "Venonat", "Bug", "Poison"],
    ["049", "Venomoth", "Bug", "Poison"],
    ["050", "Diglett", "Ground", 0],
    ["051", "Dugtrio", "Ground", 0],
    ["052", "Meowth", "Normal", 0],
    ["053", "Persian", "Normal", 0],
    ["054", "Psyduck", "Water", 0],
    ["055", "Golduck", "Water", 0],
    ["056", "Mankey", "Fighting", 0],
    ["057", "Primeape", "Fighting", 0],
    ["058", "Growlithe", "Fire", 0],
    ["059", "Arcanine", "Fire", 0],
    ["060", "Poliwag", "Water", 0],
    ["061", "Poliwhirl", "Water", 0],
    ["062", "Poliwrath", "Water", "Fighting"],
    ["063", "Abra", "Psychic", 0],
    ["064", "Kadabra", "Psychic", 0],
    ["065", "Alakazam", "Psychic", 0],
    ["066", "Machop", "Fighting", 0],
    ["067", "Machoke", "Fighting", 0],
    ["068", "Machamp", "Fighting", 0],
    ["069", "Bellsprout", "Grass", "Poison"],
    ["070", "Weepinbell", "Grass", "Poison"],
    ["071", "Victreebel", "Grass", "Poison"],
    ["072", "Tentacool", "Water", "Poison"],
    ["073", "Tentacruel", "Water", "Poison"],
    ["074", "Geodude", "Rock", "Ground"],
    ["075", "Graveler", "Rock", "Ground"],
    ["076", "Golem", "Rock", "Ground"],
    ["077", "Ponyta", "Fire", 0],
    ["078", "Rapidash", "Fire", 0],
    ["079", "Slowpoke", "Water", "Psychic"],
    ["080", "Slowbro", "Water", "Psychic"],
    ["081", "Magnemite", "Electric", "Steel"],
    ["082", "Magneton", "Electric", "Steel"],
    ["083", "Farfetchd", "Normal", "Flying"],
    ["084", "Doduo", "Normal", "Flying"],
    ["085", "Dodrio", "Normal", "Flying"],
    ["086", "Seel", "Water", 0],
    ["087", "Dewgong", "Water", "Ice"],
    ["088", "Grimer", "Poison", 0],
    ["089", "Muk", "Poison", 0],
    ["090", "Shellder", "Water", 0],
    ["091", "Cloyster", "Water", "Ice"],
    ["092", "Gastly", "Ghost", "Poison"],
    ["093", "Haunter", "Ghost", "Poison"],
    ["094", "Gengar", "Ghost", "Poison"],
    ["095", "Onix", "Rock", "Ground"],
    ["096", "Drowzee", "Psychic", 0],
    ["097", "Hypno", "Psychic", 0],
    ["098", "Krabby", "Water", 0],
    ["099", "Kingler", "Water", 0],
    ["100", "Voltorb", "Electric", 0],
    ["101", "Electrode", "Electric", 0],
    ["102", "Exeggcute", "Grass", "Psychic"],
    ["103", "Exeggutor", "Grass", "Psychic"],
    ["104", "Cubone", "Ground", 0],
    ["105", "Marowak", "Ground", 0],
    ["106", "Hitmonlee", "Fighting", 0],
    ["107", "Hitmonchan", "Fighting", 0],
    ["108", "Lickitung", "Normal", 0],
    ["109", "Koffing", "Poison", 0],
    ["110", "Weezing", "Poison", 0],
    ["111", "Rhyhorn", "Ground", "Rock"],
    ["112", "Rhydon", "Ground", "Rock"],
    ["113", "Chansey", "Normal", 0],
    ["114", "Tangela", "Grass", 0],
    ["115", "Kangaskhan", "Normal", 0],
    ["116", "Horsea", "Water", 0],
    ["117", "Seadra", "Water", 0],
    ["118", "Goldeen", "Water", 0],
    ["119", "Seaking", "Water", 0],
    ["120", "Staryu", "Water", 0],
    ["121", "Starmie", "Water", "Psychic"],
    ["122", "Mr. Mime", "Psychic", "Fairy"],
    ["123", "Scyther", "Bug", "Flying"],
    ["124", "Jynx", "Ice", "Psychic"],
    ["125", "Electabuzz", "Electric", 0],
    ["126", "Magmar", "Fire", 0],
    ["127", "Pinsir", "Bug", 0],
    ["128", "Tauros", "Normal", 0],
    ["129", "Magikarp", "Water", 0],
    ["130", "Gyarados", "Water", "Flying"],
    ["131", "Lapras", "Water", "Ice"],
    ["132", "Ditto", "Normal", 0],
    ["133", "Eevee", "Normal", 0],
    ["134", "Vaporeon", "Water", 0],
    ["135", "Jolteon", "Electric", 0],
    ["136", "Flareon", "Fire", 0],
    ["137", "Porygon", "Normal", 0],
    ["138", "Omanyte", "Rock", "Water"],
    ["139", "Omastar", "Rock", "Water"],
    ["140", "Kabuto", "Rock", "Water"],
    ["141", "Kabutops", "Rock", "Water"],
    ["142", "Aerodactyl", "Rock", "Flying"],
    ["143", "Snorlax", "Normal", 0],
    ["144", "Articuno", "Ice", "Flying"],
    ["145", "Zapdos", "Electric", "Flying"],
    ["146", "Moltres", "Fire", "Flying"],
    ["147", "Dratini", "Dragon", 0],
    ["148", "Dragonair", "Dragon", 0],
    ["149", "Dragonite", "Dragon", "Flying"],
    ["150", "Mewtwo", "Psychic", 0],
    ["151", "Mew", "Psychic", 0]
]

const nomesPokemons = listaDePokemons.map(pokemon => pokemon[1]);