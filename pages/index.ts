import { page } from "../shared";

export function indexPage() {
	return page([
		[
			"header",
			["img.logo", { src: "./img/logo.svg", alt: "Logo" }],
			[
				"nav",
				[
					"ul.nav-list",
					["li", ["a.active", { href: "#" }, "Games"]],
					["li", ["a", { href: "#" }, "About"]],
					["li", ["a", { href: "#" }, "Press"]],
				],
			],
		],
		["main"],
		["footer", "&copy; 2026 Dial-Up Dino Games"],
	]);
}
