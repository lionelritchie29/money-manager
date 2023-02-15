export const format = (currency: string, balance: number) =>
	new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency
	}).format(balance);
