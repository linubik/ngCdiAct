//////////////////////////////////////////////////////////////////////////////////////////////
//CDIACt : Denis Weiss, février 2023, BY-NC-ND
//https://emi.re/CDIAct-V2/
//Contact : weiss.denis@gmail.com
//////////////////////////////////////////////////////////////////////////////////////////////


let ts = 0; //temps de présence (timestamp)
let tp = 0; //type de présence
let li_cla; //classe
let li_id; //numéro emprunteur
let rec_id; //nom ; classe

$("#inscB").hide();
$("#inscC").hide();

const emprunteurs = [
	{
		em: "Mouss Tique",
		cl: "LLL",
		id: "1",
	},
	{
		em: "Pat Atatrak",
		cl: "LLL",
		id: "12",
	},
	{
		em: "Zone Trankil",
		cl: "LLL",
		id: "14",
	},
	{
		em: "Jordy Nateur",
		cl: "LLL",
		id: "16",
	},
	{
		em: "Bella Padi Bonjour",
		cl: "LLL",
		id: "17",
	},
	{
		em: "Zacharie Ditæ",
		cl: "LLL",
		id: "18",
	},
	{
		em: "Générer François",
		cl: "LLL",
		id: "19",
	},
	{
		em: "Hal Anbiqué",
		cl: "LLL",
		id: "20",
	},
	{
		em: "HarryH Beau",
		cl: "LLL",
		id: "21",
	},
	{
		em: "Pat Acaisse",
		cl: "LLG",
		id: "22",
	},
	{
		em: "Candy Raton",
		cl: "LLL PsyEN",
		id: "23",
	},
	{
		em: "Alain Die",
		cl: "LLG",
		id: "24",
	},
	{
		em: "Pata Caisse",
		cl: "LLG",
		id: "25",
	},
	{
		em: "Larry Haribeau",
		cl: "XXMPSI",
		id: "27",
	},
	{
		em: "Guy De Duroutar",
		cl: "LLL",
		id: "30",
	},
	{
		em: "Henri Zible",
		cl: "XXMP2I",
		id: "31",
	},
	{
		em: "René Gat",
		cl: "XXLS1",
		id: "32",
	},
	{
		em: "Éva Hévient",
		cl: "LLL",
		id: "33",
	},
	{
		em: "Mélusine Engraiv",
		cl: "XCOM1",
		id: "34",
	},
	{
		em: "ÉvaSion fiscal",
		cl: "XXPCSI",
		id: "35",
	},
	{
		em: "Abdel Icieux",
		cl: "BELLEPIERRE",
		id: "37",
	},
	{
		em: "Zacharie Haribeau",
		cl: "LLG TG2",
		id: "38",
	},
	{
		em: "Anne Odin",
		cl: "LLL YYPSI",
		id: "39",
	},
	{
		em: "Alain Proviste",
		cl: "LLL",
		id: "40",
	},
	{
		em: "Tanguy De demontagne",
		cl: "TG6",
		id: "41",
	},
	{
		em: "Axel Aire",
		cl: "LLL",
		id: "42",
	},
	{
		em: "Alain Térieur",
		cl: "LLL",
		id: "43",
	},
	{
		em: "Hal Pagué",
		cl: "LLL",
		id: "44",
	},
	{
		em: "Andy Skotek",
		cl: "LLL",
		id: "45",
	},
	{
		em: "Jean Trenscène",
		cl: "LLL",
		id: "48",
	},
	{
		em: "Barbara Couda",
		cl: "LLL",
		id: "49",
	},
	{
		em: "Laurie Golade",
		cl: "LLL",
		id: "51",
	},
	{
		em: "Amar Achide",
		cl: "LLL",
		id: "52",
	},
	{
		em: "Anna Lizdurine",
		cl: "LLL",
		id: "53",
	},
	{
		em: "Alan Izète",
		cl: "LLL",
		id: "54",
	},
	{
		em: "Olivier Tnam",
		cl: "LLL",
		id: "55",
	},
	{
		em: "Jimmy Lesbieraufrai",
		cl: "LLL",
		id: "56",
	},
	{
		em: "Gérard Manfaim",
		cl: "LLL",
		id: "58",
	},
	{
		em: "Laurie Souflé",
		cl: "LLL",
		id: "59",
	},
	{
		em: "Roger Trobu",
		cl: "LLL",
		id: "60",
	},
	{
		em: "Oscar Amouche",
		cl: "LLL",
		id: "61",
	},
	{
		em: "Gilbert Muda",
		cl: "LLL",
		id: "62",
	},
	{
		em: "Alex Térieur",
		cl: "LLL",
		id: "63",
	},
	{
		em: "Jean Biance",
		cl: "LLL",
		id: "64",
	},
	{
		em: "Émile Sabord",
		cl: "LLL",
		id: "65",
	},
	{
		em: "Jerry Golé",
		cl: "LLL",
		id: "70",
	},
	{
		em: "Malo Pié",
		cl: "LLL",
		id: "71",
	},
	{
		em: "Hal Batrosse",
		cl: "LLL",
		id: "74",
	},
	{
		em: "Charles Atan",
		cl: "LLL",
		id: "75",
	},
	{
		em: "Zacharie Métique",
		cl: "LLL",
		id: "76",
	},
	{
		em: "Luc Ratif",
		cl: "LLL",
		id: "77",
	},
	{
		em: "Larry Vière",
		cl: "LLL",
		id: "78",
	},
	{
		em: "Lenny Bards",
		cl: "LLL",
		id: "79",
	},
	{
		em: "Annabelle Etlabete",
		cl: "LLL",
		id: "80",
	},
	{
		em: "Judas Bricot",
		cl: "LLL",
		id: "81",
	},
	{
		em: "Marie Nière",
		cl: "LLL",
		id: "82",
	},
	{
		em: "Mouss Tache",
		cl: "LLL",
		id: "83",
	},
	{
		em: "Alex Ception",
		cl: "LLL",
		id: "85",
	},
	{
		em: "Laurent Cunier",
		cl: "LLL",
		id: "86",
	},
	{
		em: "Boris Ouflé",
		cl: "LLL",
		id: "87",
	},
	{
		em: "Abdel Lane",
		cl: "LLL",
		id: "89",
	},
	{
		em: "Tari kOchet",
		cl: "LLL",
		id: "90",
	},
	{
		em: "Amar Icoe",
		cl: "LLL",
		id: "91",
	},
	{
		em: "Jean Tube",
		cl: "LLL",
		id: "92",
	},
	{
		em: "Théo Courant",
		cl: "LLL",
		id: "94",
	},
	{
		em: "Jean Registre",
		cl: "LLL",
		id: "95",
	},
	{
		em: "Jean Tourloupe",
		cl: "LLL",
		id: "97",
	},
	{
		em: "Zacharie Corouge",
		cl: "LLL",
		id: "98",
	},
	{
		em: "Oscar Ambar",
		cl: "LLG 1G4",
		id: "99",
	},
	{
		em: "Mouss Quetaire",
		cl: "XXLS1",
		id: "100",
	},
	{
		em: "Gaspard Tame",
		cl: "LLL",
		id: "101",
	},
	{
		em: "Anne Imalsovage",
		cl: "",
		id: "102",
	},
	{
		em: "Mandy Paplusse",
		cl: "LLG",
		id: "104",
	},
	{
		em: "Sue Lfureux",
		cl: "LLG",
		id: "105",
	},
	{
		em: "Larry Gateau",
		cl: "LLG ELT1",
		id: "106",
	},
	{
		em: "Sue Palonion",
		cl: "LLL YYMP",
		id: "107",
	},
	{
		em: "Basile Hic",
		cl: "LLG ELT2",
		id: "108",
	},
	{
		em: "Vincent Timètres",
		cl: "LLG CRSA2",
		id: "109",
	},
	{
		em: "Jean Bon",
		cl: "LLG MS1",
		id: "110",
	},
	{
		em: "Larry Olait",
		cl: "LLG ELT1",
		id: "111",
	},
	{
		em: "John Doeuf",
		cl: "LLG PREPINP1",
		id: "112",
	},
	{
		em: "Jean Fonce",
		cl: "LLG PREPINP1",
		id: "114",
	},
	{
		em: "Omar Cassin",
		cl: "LLG CPES1",
		id: "115",
	},
	{
		em: "AnneI croche",
		cl: "LLG PREPINP1",
		id: "116",
	},
	{
		em: "Jim Agine",
		cl: "LLG CPES1",
		id: "117",
	},
	{
		em: "Scott Omate",
		cl: "LLG CPES1",
		id: "119",
	},
	{
		em: "Jean Profite",
		cl: "LLG CPES1",
		id: "120",
	},
	{
		em: "TaraDes Gouts",
		cl: "LLG CPES1",
		id: "121",
	},
	{
		em: "Tara Clure",
		cl: "LLG CPES1",
		id: "122",
	},
	{
		em: "CélineÉ vitable",
		cl: "LLG PREPINP1",
		id: "123",
	},
	{
		em: "Francis Oussette",
		cl: "LLG CPES1",
		id: "124",
	},
	{
		em: "Moussah Msoule",
		cl: "LLG MS1",
		id: "125",
	},
	{
		em: "Ella Lefronblon",
		cl: "LLG CPES1",
		id: "126",
	},
	{
		em: "Terry Dicule",
		cl: "LLG CPES1",
		id: "127",
	},
	{
		em: "Hal Térophilie",
		cl: "LLG PREPINP1",
		id: "128",
	},
	{
		em: "Adam Main",
		cl: "LLG CPES1",
		id: "129",
	},
	{
		em: "Rémy Neur",
		cl: "LLG PREPINP1",
		id: "130",
	},
	{
		em: "Gérard Mansoif",
		cl: "LLL YYLS2",
		id: "132",
	},
	{
		em: "Ycare Amel",
		cl: "LLG PREPINP1",
		id: "133",
	},
	{
		em: "Clémentine Omique",
		cl: "LLG PREPINP1",
		id: "134",
	},
	{
		em: "Ben Aor Dure",
		cl: "LLG PREPINP1",
		id: "135",
	},
	{
		em: "Agathe De Blouze",
		cl: "LLG PREPINP1",
		id: "136",
	},
	{
		em: "Pierre Oglyphe",
		cl: "LLG MS1",
		id: "138",
	},
	{
		em: "Bella Donne",
		cl: "LLG ELT1",
		id: "139",
	},
	{
		em: "Tarik Ané",
		cl: "LLG CPES1",
		id: "140",
	},
	{
		em: "Alain Péritie",
		cl: "LLG CPES1",
		id: "141",
	},
	{
		em: "Thomas Lendormi",
		cl: "LLG CPES1",
		id: "142",
	},
	{
		em: "Larry Bambelle",
		cl: "LLG MS1",
		id: "143",
	},
	{
		em: "Guy Tarenbois",
		cl: "LLG CRSA1",
		id: "144",
	},
	{
		em: "Lee Posuccion",
		cl: "LLG CPES1",
		id: "145",
	},
	{
		em: "Yann Haliz",
		cl: "LLG CPES1",
		id: "146",
	},
	{
		em: "GuyDon Develo",
		cl: "LLG CRSA1",
		id: "147",
	},
	{
		em: "Claude Toilet",
		cl: "LLG PREPINP1",
		id: "148",
	},
	{
		em: "Eleonore Ilétosud",
		cl: "LLG CPES1",
		id: "149",
	},
	{
		em: "Monique Aragua",
		cl: "LLG CPES1",
		id: "151",
	},
	{
		em: "Aude Cologne",
		cl: "LLG PREPINP1",
		id: "153",
	},
	{
		em: "Hector Ticolis",
		cl: "XMCO1",
		id: "154",
	},
	{
		em: "Ève Ahévient",
		cl: "LLG PREPINP1",
		id: "155",
	},
	{
		em: "Élie Ksir",
		cl: "LLG PREPINP1",
		id: "156",
	},
	{
		em: "Yannis Elnipoivre",
		cl: "LLG PREPINP1",
		id: "157",
	},
	{
		em: "Harry Haribeau",
		cl: "LLG PREPINP1",
		id: "158",
	},
	{
		em: "Annick Roche",
		cl: "LLG PREPINP1",
		id: "159",
	},
	{
		em: "Al Anbiqué",
		cl: "LLG ELT1",
		id: "160",
	},
	{
		em: "Ela Lesyeubleu",
		cl: "LLG CPES1",
		id: "161",
	},
	{
		em: "Elsa Rose",
		cl: "LLG 1STI2D1",
		id: "162",
	},
	{
		em: "Rabbi Troipièce",
		cl: "LLG 1G3",
		id: "163",
	},
	{
		em: "Denis Dpoule",
		cl: "LLG 1STL SPC",
		id: "164",
	},
	{
		em: "Ursule Fureux",
		cl: "LLG ELT1",
		id: "166",
	},
	{
		em: "Yves Remort",
		cl: "LLG MS1",
		id: "167",
	},
	{
		em: "Arthur Ricéfaire",
		cl: "LLG 2G7",
		id: "168",
	},
	{
		em: "Sarah Bande",
		cl: "LLG 2G2",
		id: "169",
	},
	{
		em: "Tarek Tiffieh",
		cl: "LLG 2G4",
		id: "170",
	},
	{
		em: "Lana Quine",
		cl: "LLG 2G9",
		id: "171",
	},
	{
		em: "Otto Mate",
		cl: "LLG MS1",
		id: "172",
	},
	{
		em: "Harry Zona",
		cl: "LLG 2G9",
		id: "173",
	},
	{
		em: "Patrice Taisse",
		cl: "LLG 1STL BIO",
		id: "175",
	},
	{
		em: "Vick Time",
		cl: "LLG MS1",
		id: "176",
	},
	{
		em: "Harry Stocrassie",
		cl: "LLG MS1",
		id: "177",
	},
	{
		em: "Yves Elines",
		cl: "LLG MS1",
		id: "178",
	},
	{
		em: "Emmy Cycle",
		cl: "LLG CPES1",
		id: "179",
	},
	{
		em: "Philippe Osuccion",
		cl: "LLG",
		id: "180",
	},
	{
		em: "Paul Ussion",
		cl: "LLG",
		id: "181",
	},
	{
		em: "Sophie Stiqué",
		cl: "LLG",
		id: "182",
	},
	{
		em: "Paul Ochon",
		cl: "LLG",
		id: "183",
	},
	{
		em: "Lara Pafromage",
		cl: "LLG",
		id: "184",
	},
	{
		em: "Terry Golo",
		cl: "LLG",
		id: "185",
	},
	{
		em: "Kamal Dormi",
		cl: "LLG",
		id: "188",
	},
	{
		em: "Lara Des Gouts",
		cl: "LLG",
		id: "189",
	},
	{
		em: "Claire Delune",
		cl: "LLG",
		id: "190",
	},
	{
		em: "Judas Nanasse",
		cl: "LLG",
		id: "191",
	},
	{
		em: "Denis Ni",
		cl: "LLG",
		id: "192",
	},
	{
		em: "Aubin Sahalor",
		cl: "LLG",
		id: "194",
	},
	{
		em: "Louis Fine",
		cl: "LLG",
		id: "197",
	},
	{
		em: "Anna Tomie",
		cl: "XCI1",
		id: "198",
	},
	{
		em: "GuyDon Develo",
		cl: "XCI1",
		id: "199",
	},
	{
		em: "Jean-Paul Aire",
		cl: "YCI2",
		id: "200",
	},
	{
		em: "Mouss Arazeh",
		cl: "LLL",
		id: "201",
	},
	{
		em: "Alain Die",
		cl: "LLL",
		id: "202",
	},
	{
		em: "Samy Rouate",
		cl: "LLL",
		id: "203",
	},
	{
		em: "Guy Tard",
		cl: "LLL",
		id: "205",
	},
	{
		em: "Claude Javel",
		cl: "LLL",
		id: "206",
	},
	{
		em: "Gilbert Lingot",
		cl: "LLL",
		id: "207",
	},
	{
		em: "Edgard Gouille",
		cl: "LLL",
		id: "209",
	},
	{
		em: "Thomas Gnolia",
		cl: "LLL",
		id: "210",
	},
	{
		em: "Denis Doiseau",
		cl: "LLL",
		id: "211",
	},
	{
		em: "Marion Nete",
		cl: "LLL",
		id: "212",
	},
	{
		em: "Larry Bambelle",
		cl: "LLL",
		id: "213",
	},
	{
		em: "Jean Peuplu",
		cl: "LLL",
		id: "214",
	},
	{
		em: "Lami Molette",
		cl: "LLL",
		id: "215",
	},
	{
		em: "Pennie Ciline",
		cl: "LLL",
		id: "216",
	},
	{
		em: "Anne Ogastric",
		cl: "LLL",
		id: "217",
	},
	{
		em: "Adam Desmèn",
		cl: "LLL YYLS2",
		id: "219",
	},
	{
		em: "Laure Higine",
		cl: "LLL",
		id: "220",
	},
	{
		em: "Judas Sperge",
		cl: "LLL",
		id: "221",
	},
	{
		em: "Blanche Isserie",
		cl: "LLL",
		id: "222",
	},
	{
		em: "Lara Clure",
		cl: "LLL",
		id: "223",
	},
	{
		em: "Annabelle Adone",
		cl: "LLL",
		id: "224",
	},
	{
		em: "Mehdi Khaman",
		cl: "LLL",
		id: "225",
	},
	{
		em: "Harry Stocratt",
		cl: "LLL",
		id: "226",
	},
	{
		em: "HubertM uda",
		cl: "LLL YYMP",
		id: "228",
	},
	{
		em: "Jacques Célaire",
		cl: "LLL",
		id: "229",
	},
	{
		em: "Oscar Ibou",
		cl: "LLL",
		id: "230",
	},
	{
		em: "Dick Tature",
		cl: "LLL",
		id: "231",
	},
	{
		em: "Ève Akué",
		cl: "LLL",
		id: "232",
	},
	{
		em: "Denis Ouinon",
		cl: "XCOM1",
		id: "233",
	},
	{
		em: "HugoDe Zila",
		cl: "YMCO2",
		id: "235",
	},
	{
		em: "Léo Pard",
		cl: "XCOM1",
		id: "236",
	},
	{
		em: "Ève Idamant",
		cl: "TG1",
		id: "237",
	},
	{
		em: "Kelly Stoire",
		cl: "XMCO1",
		id: "238",
	},
	{
		em: "Gérard Manvussa",
		cl: "TSTMG3",
		id: "239",
	},
	{
		em: "Adam Desmèn",
		cl: "TSTMG2",
		id: "241",
	},
	{
		em: "Kay Lidiote",
		cl: "TSTMG1",
		id: "242",
	},
	{
		em: "Henri Chœi",
		cl: "XXMPSI",
		id: "243",
	},
	{
		em: "Franck Fort",
		cl: "XCOM1",
		id: "244",
	},
	{
		em: "Amanda Mère",
		cl: "XCOM1",
		id: "245",
	},
	{
		em: "Anna Bolisant",
		cl: "XCI1",
		id: "246",
	},
	{
		em: "Ycare Abine",
		cl: "XMCO1",
		id: "247",
	},
	{
		em: "Maëva Hévient",
		cl: "XXLS1",
		id: "248",
	},
	{
		em: "Lenny Lenny",
		cl: "XCI1",
		id: "250",
	},
	{
		em: "Maude Cologne",
		cl: "TSTMG2",
		id: "252",
	},
	{
		em: "Anne Icroche",
		cl: "1STMG2",
		id: "253",
	},
	{
		em: "Dick Omandman",
		cl: "1STMG2",
		id: "254",
	},
	{
		em: "Ève Asion",
		cl: "1STMG1",
		id: "255",
	},
	{
		em: "Teddy Stante",
		cl: "203",
		id: "256",
	},
	{
		em: "Laurène Desneiges",
		cl: "209",
		id: "257",
	},
	{
		em: "Annie Malsovage",
		cl: "204",
		id: "258",
	},
	{
		em: "Tom Béllachemiz",
		cl: "204",
		id: "259",
	},
	{
		em: "Sarah Joute",
		cl: "XCOM1",
		id: "261",
	},
	{
		em: "Jean Ticipe",
		cl: "1STMG2",
		id: "263",
	},
	{
		em: "Pat Ate",
		cl: "202",
		id: "265",
	},
	{
		em: "Al Aniche",
		cl: "1STMG2",
		id: "266",
	},
	{
		em: "Nick Thémère",
		cl: "TG7",
		id: "268",
	},
	{
		em: "Omar Mite",
		cl: "1STMG1",
		id: "270",
	},
	{
		em: "Céline Évitable",
		cl: "1G6",
		id: "271",
	},
	{
		em: "Florent Bar",
		cl: "TSTMG2",
		id: "272",
	},
	{
		em: "Mehdi Zan",
		cl: "LLL YYMP",
		id: "273",
	},
	{
		em: "Tess Tostérone",
		cl: "1G1",
		id: "274",
	},
	{
		em: "Lucie Soussette",
		cl: "206",
		id: "275",
	},
	{
		em: "Edgard Gouille",
		cl: "XMCO1",
		id: "276",
	},
	{
		em: "Chantal Giquê",
		cl: "205",
		id: "277",
	},
	{
		em: "Sam Énerve",
		cl: "TSTMG1",
		id: "278",
	},
	{
		em: "Jean Rage",
		cl: "202",
		id: "279",
	},
	{
		em: "Dolly Bellule",
		cl: "XCOM1",
		id: "280",
	},
	{
		em: "Kenji Suïjireste",
		cl: "LLL",
		id: "282",
	},
	{
		em: "Théo Jasmin",
		cl: "LLL",
		id: "283",
	},
	{
		em: "Mélanie Netendoenmarche",
		cl: "LLL",
		id: "284",
	},
	{
		em: "Laure Ateur",
		cl: "LLL",
		id: "285",
	},
	{
		em: "Éva Nescense",
		cl: "LLL",
		id: "286",
	},
	{
		em: "Terry Golade",
		cl: "LLL",
		id: "287",
	},
	{
		em: "Al Caline",
		cl: "LLL",
		id: "289",
	},
	{
		em: "Jean Tenletrainsiflé",
		cl: "LLL",
		id: "291",
	},
	{
		em: "Sarah Fraîchit",
		cl: "LLL",
		id: "293",
	},
	{
		em: "Sarah Vigote",
		cl: "LLL",
		id: "295",
	},
	{
		em: "Marie Rouanna",
		cl: "LLL",
		id: "296",
	},
	{
		em: "Ève Asionfiscal",
		cl: "LLG 1G4",
		id: "298",
	},
	{
		em: "Sarah Tatouille",
		cl: "LLG 1G4",
		id: "299",
	},
	{
		em: "Guy Liguili",
		cl: "LLL YCI2",
		id: "315",
	},
	{
		em: "Terry Chmonfils",
		cl: "LLL YYLS2",
		id: "328",
	},
	{
		em: "Jean-Paul Ussion",
		cl: "LLL YYPSI",
		id: "351",
	},
	{
		em: "Léo Desseine",
		cl: "LLL YYLS2",
		id: "355",
	},
	{
		em: "Callie Bellule",
		cl: "YYMP",
		id: "360",
	},
	{
		em: "Maude Zarela",
		cl: "LLL XCI1",
		id: "362",
	},
	{
		em: "Ray Toric",
		cl: "LLL XCI1",
		id: "384",
	},
	{
		em: "Annie Mal",
		cl: "XXLS1",
		id: "390",
	},
	{
		em: "Anne Alizgrammaticale",
		cl: "YYPSI",
		id: "615",
	},
	{
		em: "Marie Vaudage",
		cl: "XXPCSI",
		id: "632",
	},
	{
		em: "Jean Sérien",
		cl: "XXMPSI",
		id: "718",
	},
	{
		em: "Abel Igérant",
		cl: "XCOM1",
		id: "783",
	},
	{
		em: "Kelly Diote",
		cl: "XXLS1",
		id: "831",
	},
	{
		em: "Tanguy Rolande",
		cl: "XXDROIT",
		id: "855",
	},
	{
		em: "Alex Térieur",
		cl: "XCOM1",
		id: "877",
	},
	{
		em: "Marthe Inais",
		cl: "XCI1",
		id: "927",
	},
	{
		em: "Mega Watt",
		cl: "XXPCSI",
		id: "944",
	},
	{
		em: "Emma Caréna",
		cl: "XXLS1",
		id: "945",
	},
	{
		em: "Bart Ichaut",
		cl: "XMCO1",
		id: "1033",
	},
	{
		em: "Ben Aor Dure",
		cl: "XXLS1",
		id: "1039",
	},
];
/*---------------- PERSONNALISATION ETABLISSEMENT-------------------*/
try {
	localStorage.getItem("objActNM");
	document.getElementById("titre").innerHTML = localStorage.getItem("objActNM");
} catch (e) {
	document.getElementById("titre").innerHTML = "[Etablissement]";
}

/*---------------- AUTOCOMPLETION -------------------*/

/* if (localStorage.getItem("objActEM") !== null) {
	let objetDataTemp = JSON.parse(localStorage.getItem("objActEM"));
	emprunteurs = objetDataTemp;
} else {
	document.getElementById("confirme").innerHTML =
		"<div class='error'>problème de fichier des élèves</div>";
} */

function heure() {
	var date = new Date();
	var heure = date.getHours();
	var minutes = date.getMinutes();
	if (minutes < 10) minutes = "0" + minutes;
	return heure + "h " + minutes;
}
document.getElementById("hms").innerHTML = heure();

function findMatches(wordToMatch, emprunteurs) {
	return emprunteurs.filter((place) => {
		const regex = new RegExp(wordToMatch, "gi");
		//g= global, correspond à toutes les instances du modèle dans une chaîne
		//i= insensible à la casse
		return place.em.match(regex) || place.cl.match(regex);
	});
}

function displayMatches() {
	const matchArray = findMatches(this.value, emprunteurs);
	const html = matchArray
		.map((place) => {
			const regex = new RegExp(this.value, "g");
			//rec_id = place.id + ";" + place.cl;
			rec_id = place.id;

			let noms = place.em.replace(
				regex,
				`<span class="hl">${this.value}</span>`
			);
			let classes = place.cl.replace(
				regex,
				`<span class="hl">${this.value}</span>`
			);

			return (
				`
                <li data-valeur="` +
				rec_id +
				`" onclick="valEmp(this);">
                <span class="name" >${noms}</span>
                <span class="population"> ${classes}</span >
                </li >`
			);
		})
		.join("");
	suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

function selectTemps() {
	$("#inscA").hide();
	$("#inscB").show().addClass("animated fadeInLeft");
}

function valEmp(elt) {
	li_id = elt.dataset.valeur;
	selectTemps();
}

/*---------------- TRAITEMENT -------------------*/
$("#et01").mousedown(function () {
	tp = "1";
	finEtape2();
});
$("#et02").mousedown(function () {
	tp = "2";
	finEtape2();
});
$("#et03").mousedown(function () {
	tp = "3";
	finEtape2();
});
$("#et04").mousedown(function () {
	tp = "4";
	finEtape2();
});
$("#et05").mousedown(function () {
	tp = "5";
	finEtape2();
});
$("#et06").mousedown(function () {
	tp = "6";
	finEtape2();
});
$("#et07").mousedown(function () {
	tp = "7";
	finEtape2();
});
$("#et08").mousedown(function () {
	tp = "8";
	finEtape2();
});

function finEtape2() {
	$("#inscB").removeClass().addClass("animated fadeOutRight").hide();
	$("#inscC").show().removeClass().addClass("animated fadeInLeft");
	$("html, body").animate(
		{
			scrollTop: 0,
		},
		"slow"
	);
}

function sauveDatas() {
	document.getElementById("confirme").innerHTML = "enregistrement...";
	//.toLocaleString("fr-FR", {timeZone: 'Indian/Reunion'})

	ts = Math.round(+new Date() / 1000); //timestamp

	let stats = []; //statistiques
	//let ajout = li_id + ";" + tp + ";" + ts;//li_id + ";" + tp + ";" + ts + ' \n';
	let ajout = +tp + ";" + ts + ";" + li_id;

	if (localStorage.getItem("CDIActStats") != undefined) {
		stats.push(localStorage.getItem("CDIActStats"));
	}
	stats.push(ajout);

	localStorage.setItem("CDIActStats", stats);

	$("#inscC").hide("slow");
	let x = setTimeout(rechargePage, 500);
}

function rechargePage() {
	document.getElementById("confirme").innerHTML = "saisie enregistrée...";
	location.reload();
}

$("#valide").mousedown(function () {
	document.getElementById("confirme").innerHTML = "Traitement en cours... ! ";
	sauveDatas();
});

$("html, body").animate(
	{
		scrollTop: 0,
	},
	"slow"
);
