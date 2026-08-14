import { topLevelPage } from "../shared";

type Links = Record<string, string>;

type GameInfo = {
	name: string;
	thumbnail: string;
	tags: string[];
	description: string;
	links: Record<string, string>;
};

const featuredGames: GameInfo[] = [
	{
		name: "Hexxagon",
		thumbnail: "/img/thumb/hexxagon.png",
		tags: ["board"],
		description:
			"Classic game of hexxagon. Defeat your opponents by taking their tokens, stand your ground and prosper.",
		links: {
			"Play on CrazyGames!": "https://www.crazygames.com/game/hexxagon",
		},
	},
	{
		name: "Tens!",
		thumbnail: "/img/thumb/tens.svg",
		tags: ["puzzle", "solitare"],
		description:
			"Addictive game about addition. Select numbers that add up to ten and try to clear as much space as possible!",
		links: {
			"Play on Poki!": "https://poki.com/en/g/tens",
		},
	},
	{
		name: "Pigeons aren't Real?",
		thumbnail: "/img/thumb/pigeons.png",
		tags: ["arcade"],
		description:
			"Pay attention to the pigeon's behavior to distinguish robots from real birds. Don't spook too many real pigeons.",
		links: {
			"Play on itch!": "https://yngvarr.itch.io/pigeons-arent-real",
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
		topLevelPage,
		"Games",
		[
			"p.text-center",
			"We make games that look like they could be found on your old cozy computer.",
		],
		["h1", "Our games"],
		["div.game-list", featuredGames.map((x) => [game, x])],
	];
}
