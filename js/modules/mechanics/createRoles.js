function getRolesAmount(userCount, ratios) {
	const totalRatio = ratios.reduce((a, b) => a + b, 0);
	const result = [];
	let amountLeft = userCount;

	for (const ratio of ratios) {
		let userAmount = Math.ceil(userCount / totalRatio * ratio);
		userAmount = Math.min(amountLeft, userAmount);

		result.push(userAmount);
		amountLeft -= userAmount;
	}

	return result;
}

export default function createRoles(users) {
	const amountPlayers = users.length;

	let rolesAmount = getRolesAmount(amountPlayers, [3, 2, 1]);
	
	let allRoles = [];
	
	for (var i = 0; i < rolesAmount[0]; i++) {
		allRoles.push("burger");
	}
	for (var i = 0; i < rolesAmount[1]; i++) {
		allRoles.push("undercover");
	}
	for (var i = 0; i < rolesAmount[2]; i++) {
		allRoles.push("mr-white");
	}

	return allRoles;
}