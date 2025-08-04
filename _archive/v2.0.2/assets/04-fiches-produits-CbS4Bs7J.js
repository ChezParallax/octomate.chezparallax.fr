const id = "fiches-produits";
const title = "3 000 fiches produits B2B";
const client = "E-commerce B2B pas encore lancé";
const icon = "📄";
const theme = "light-blue";
const layout = "large";
const challenge = {
	title: "Défi",
	description: "Rédiger 3 000+ descriptifs produits à la main = 6 mois de travail estimé avant le lancement."
};
const solution = {
	title: "Solution",
	description: "Automatisation récupération + reformulation IA avec validation humaine et respect de la charte éditoriale."
};
const results = {
	theme: "green",
	metrics: [
		{
			value: "1",
			label: "semaine vs 6 mois"
		},
		{
			value: "629%",
			label: "ROI estimé"
		}
	],
	achievements: [
		"625 heures économisées",
		"Système réutilisable gratuitement",
		"Lancement e-commerce accéléré"
	]
};
const _04FichesProduits = {
	id: id,
	title: title,
	client: client,
	icon: icon,
	theme: theme,
	layout: layout,
	challenge: challenge,
	solution: solution,
	results: results
};

export { challenge, client, _04FichesProduits as default, icon, id, layout, results, solution, theme, title };
