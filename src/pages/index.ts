import { topLevelPage } from "../shared";

type Link =
	| {
			type: "text";
			text: string;
			url: string;
	  }
	| {
			type: "badge";
			badge: string;
			url: string;
	  };

type GameInfo = {
	name: string;
	thumbnail: string;
	tags: string[];
	description: string;
	links: Link[];
};

const featuredGames: GameInfo[] = [
	{
		name: "Hexxagon",
		thumbnail: "/img/thumb/hexxagon.png",
		tags: ["board"],
		description:
			"Classic game of hexxagon. Defeat your opponents by taking their tokens, stand your ground and prosper.",
		links: [
			{
				type: "text",
				text: "Play on CrazyGames!",
				url: "https://www.crazygames.com/game/hexxagon",
			},
		],
	},
	{
		name: "Tens!",
		thumbnail: "/img/thumb/tens.svg",
		tags: ["puzzle", "solitare"],
		description:
			"Addictive game about addition. Select numbers that add up to ten and try to clear as much space as possible!",
		links: [
			{ type: "badge", badge: "poki", url: "https://poki.com/en/g/tens" },
		],
	},
	{
		name: "Pigeons aren't Real?",
		thumbnail: "/img/thumb/pigeons.png",
		tags: ["arcade"],
		description:
			"Pay attention to the pigeon's behavior to distinguish robots from real birds. Don't spook too many real pigeons.",
		links: [
			{
				type: "badge",
				badge: "itch",
				url: "https://yngvarr.itch.io/pigeons-arent-real",
			},
		],
	},
];

function linkList(_ctx: any, links: Link[]) {
	return links.map((link) => {
		if (link.type == "text") {
			return ["span", ["a", { href: link.url }, link.text]];
		}

		if (link.type == "badge") {
			return [
				"span.badge",
				[
					"a",
					{ href: link.url },
					["img", { src: `/img/badges/${link.badge}.png` }],
				],
			];
		}
	});
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
		topLevelPage,
		"Games",
		["div.game-list", featuredGames.map((x) => [game, x])],
	];
}
