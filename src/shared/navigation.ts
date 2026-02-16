const TOP_LEVEL_LINKS = [
	{
		name: "Games",
		path: "/",
	},
	{
		name: "About",
		path: "/about/",
	},
];

export function menu(_ctx: any, currentPageName: string) {
	return [
		"nav",
		[
			"ul.nav-list",
			TOP_LEVEL_LINKS.map(({ name, path }) => [
				"li",
				[currentPageName === name ? "a.active" : "a", { href: path }, name],
			]),
		],
	];
}
