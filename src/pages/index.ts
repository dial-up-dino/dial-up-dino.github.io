import { type PartialRecord, page } from "../shared";

type LinkDest = "poki" | "itch" | "steam";

type Links = PartialRecord<LinkDest, string>;

type GameInfo = {
	name: string;
	thumbnail: string;
	tags: string[];
	description: string;
	links: Links;
};

const featuredGames: GameInfo[] = [
	{
		name: "Tens!",
		thumbnail: "./img/thumb/tens.svg",
		tags: ["puzzle", "solitare"],
		description:
			"Addictive game about addition. Select numbers that add up to ten and try to clear as much space as possible!",
		links: {
			// poki: "#",
			itch: "https://yngvarr.itch.io/tens",
		},
	},
	{
		name: "Pigeons aren't Real?",
		thumbnail: "./img/thumb/pigeons.png",
		tags: ["arcade"],
		description:
			"Pay attention to the pigeon's behavior to distinguish robots from real birds. Don't spook too many real pigeons.",
		links: {
			// poki: "#",
			itch: "https://yngvarr.itch.io/pigeons-arent-real",
		},
	},
];

function linkList(_ctx: any, links: Links) {
	return Object.entries(links).map(([key, url]) => [
		"span",
		["a", { href: url }, key],
	]);
}

function game(_ctx: any, gameInfo: GameInfo) {
	return [
		"div.game",
		["img.game-thumbnail", { src: gameInfo.thumbnail }],
		[
			"div.game-info",
			["h2", gameInfo.name],
			["p", `Tags: ${gameInfo.tags.join(", ")}`],
			["p", gameInfo.description],
			["div.game-links", [linkList, gameInfo.links]],
		],
	];
}

export function indexPage(_ctx: any) {
	return [
		page,
		[
			[
				"header",
				["img.logo", { src: "./img/logo.svg", alt: "Logo" }],
				[
					"nav",
					[
						"ul.nav-list",
						["li", ["a.active", { href: "#" }, "Games"]],
						["li", ["a", { href: "#", title: "Under construction." }, "About"]],
						["li", ["a", { href: "#", title: "Under construction." }, "Press"]],
					],
				],
			],
			[
				"main",
				[
					"p.text-center",
					"We make games that look like they could be found on your old cozy computer.",
				],
				["h1", "Games"],
				["div.game-list", featuredGames.map((x) => [game, x])],
			],
			["footer", "&copy; 2026 Dial-Up Dino Games"],
		],
	];
}
