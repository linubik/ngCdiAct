// 1 classe et 1 balises sont écoutés, view-el et section
//section pour l'écoute de la navigation
//view-el pour les effets
//pour fonctionner il faut au moins les classes animated qui cache et view-el qui est l'élément à écouter
//on ajoute ou retire inview à view-el et active à section ce qui rend animated visible et actionne l'effet
//Effets possibles fadeIn, fadeInLeft, fadeInRight (pour les titres), fadeInDown, turnIn, zoomIn

//on écoute la classe .view-el
let observedElements = document.querySelectorAll(".view-el");

const options = {
	rootMargin: "0px",
	threshold: [0, 0.25, 0.5, 0.75, 1],
};

//on ajoute la classe . inview en cas d'entrée dans le champ view-el ou on la retire

const inViewCallback = (entries) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio >= 0.2) {
			entry.target.classList.add("inview");
		} else {
			entry.target.classList.remove("inview");
		}
	});
};
let obsO = new IntersectionObserver(inViewCallback, options);

//Ecoute du délais pour retard d'affichage
//si data-delay est fixé, exemple data-delay="5000"
observedElements.forEach((element) => {
	let dataDelay = element.getAttribute("data-delay");
	element.style.transitionDelay = dataDelay + "ms";
	obsO.observe(element);
});
