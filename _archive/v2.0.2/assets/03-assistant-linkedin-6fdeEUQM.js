const id = "assistant-linkedin";
const title = "Assistant LinkedIn B.R.U.I.T";
const client = "CEO surchargé";
const icon = "🤖";
const theme = "copper";
const layout = "compact";
const challenge = {
	title: "Défi",
	description: "Création de contenu chronophage = 1h30/post. Recherche, rédaction, formattage et planification manuels."
};
const solution = {
	title: "Solution",
	description: "Assistant éditorial automatisé piloté à 100% depuis Notion, sans prompt ni interface technique."
};
const results = {
	theme: "blue",
	metrics: [
		{
			value: "24h",
			label: "économisées/mois"
		},
		{
			value: "560%",
			label: "ROI année 1"
		}
	],
	achievements: [
		"4 publications/semaine automatisées",
		"Coût par publication : 0,03 $"
	]
};
const _03AssistantLinkedin = {
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

export { challenge, client, _03AssistantLinkedin as default, icon, id, layout, results, solution, theme, title };
