const id = "relance-factures";
const title = "Automation relance factures";
const client = "Tâche manuelle chronophage";
const icon = "💰";
const theme = "copper";
const layout = "compact";
const challenge = {
	title: "Défi",
	description: "Suivi des paiements et relances clients effectué à la main. Source d'erreurs et d'oublis."
};
const solution = {
	title: "Solution",
	description: "Workflow complet d'automatisation piloté par Stripe + Google Sheets + Email + Teams."
};
const results = {
	theme: "orange",
	metrics: [
		{
			value: "2h",
			label: "économisées/sem."
		},
		{
			value: "250%",
			label: "ROI année 1"
		}
	],
	achievements: [
		"Emails de relance personnalisés automatiques",
		"Diminution des retards de paiement"
	]
};
const _05RelanceFactures = {
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

export { challenge, client, _05RelanceFactures as default, icon, id, layout, results, solution, theme, title };
