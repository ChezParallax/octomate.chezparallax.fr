const id = "base-contacts";
const title = "Base 25 000 contacts enrichie";
const client = "Client confidentiel - Secteur B2B";
const icon = "💾";
const theme = "copper";
const layout = "large";
const challenge = {
	title: "Défi",
	description: "Enrichir manuellement une base prospects avec uniquement nom enseigne + adresse. Récupération email, téléphone, informations manquantes."
};
const solution = {
	title: "Solution",
	description: "Système automatisé sans IA pour récupération données manquantes via sources publiques et APIs spécialisées."
};
const results = {
	theme: "green",
	metrics: [
		{
			value: "85%",
			label: "Taux de complétion"
		},
		{
			value: "4j",
			label: "vs 3 mois"
		},
		{
			value: "300%",
			label: "ROI calculé"
		}
	],
	achievements: [
		"Informations manquantes remplies automatiquement (email, téléphone)",
		"Erreurs corrigées automatiquement (enseignes renommées, adresses partielles)",
		"Base prête à l'emploi livrée"
	]
};
const testimonial = {
	quote: "Un gain de temps colossal par rapport à un traitement manuel qui aurait pris des mois.",
	author: "Pierre M., Dirigeant"
};
const _01BaseContacts = {
	id: id,
	title: title,
	client: client,
	icon: icon,
	theme: theme,
	layout: layout,
	challenge: challenge,
	solution: solution,
	results: results,
	testimonial: testimonial
};

export { challenge, client, _01BaseContacts as default, icon, id, layout, results, solution, testimonial, theme, title };
