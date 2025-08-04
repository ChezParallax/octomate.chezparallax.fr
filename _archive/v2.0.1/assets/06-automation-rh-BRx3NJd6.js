const id = "automation-rh";
const title = "Automatisation RH complète";
const client = "PME Tech - 50 employés";
const icon = "👥";
const theme = "light-blue";
const layout = "compact";
const challenge = {
	title: "Défi",
	description: "Processus de recrutement manuel : tri CV, planification entretiens, suivi candidats. 8h/semaine perdues par RH."
};
const solution = {
	title: "Solution",
	description: "Pipeline automatisé : parsing CV, scoring automatique, planification intelligente et suivi personnalisé."
};
const results = {
	theme: "blue",
	metrics: [
		{
			value: "75%",
			label: "temps économisé"
		},
		{
			value: "3x",
			label: "plus de candidats traités"
		}
	],
	achievements: [
		"Tri automatique des CV selon critères",
		"Planification entretiens sans conflit",
		"Suivi candidat personnalisé"
	]
};
const _06AutomationRh = {
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

export { challenge, client, _06AutomationRh as default, icon, id, layout, results, solution, theme, title };
