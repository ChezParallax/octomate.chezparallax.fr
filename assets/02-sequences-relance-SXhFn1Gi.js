const id = "sequences-relance";
const title = "Séquences de relance automatisées";
const client = "Agence Marketing Digital";
const icon = "📧";
const theme = "light-blue";
const layout = "compact";
const challenge = {
	title: "Défi",
	description: "Commerciaux passent 3h/jour à relancer manuellement prospects selon séquences prédéfinies. Suivi chronophage et erreurs fréquentes."
};
const solution = {
	title: "Solution",
	description: "Système de séquences email automatisées avec déclencheurs basés sur comportement utilisateur et réponses personnalisées."
};
const results = {
	theme: "purple",
	metrics: [
		{
			value: "90%",
			label: "Temps libéré"
		},
		{
			value: "+40%",
			label: "Taux de réponse"
		}
	],
	achievements: [
		"15h/semaine récupérées par commercial",
		"Séquences personnalisées selon profil prospect"
	]
};
const _02SequencesRelance = {
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

export { challenge, client, _02SequencesRelance as default, icon, id, layout, results, solution, theme, title };
