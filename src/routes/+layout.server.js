export function load({ url }) {
	let navs = [
		{ text: 'About', href: '/about' },
		{ text: 'Course', href: '/course' },
		{ text: 'Register', href: '/register' },
	];
	navs = navs.map((item) => {
		return { ...item, active: item.href == url.pathname };
	});

	return {
		navs,
		pathname: url.pathname,
	};
}
