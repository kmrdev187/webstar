export function setCookie(name: string, value: string) {
	document.cookie = `${name}=${value}`;
}

export function getCookieByName(name: string) {
	const match = document.cookie.match(
		new RegExp('(^| )' + name + '=([^;]+)')
	);
	if (match) {
		return match[0].split('=')[1];
	} else {
		return null;
	}
}

export function deleteCookie(name: string) {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}

export function normalizeName(name: string) {
	if (name.includes('<br>')) {
		const parts = name.split('<br>');
		return `${parts[0]} ${parts[1]}`;
	} else {
		return name;
	}
}
