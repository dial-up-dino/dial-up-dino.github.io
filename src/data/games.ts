export type Link =
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

export type GameInfo = {
	name: string;
	thumbnail: string;
	tags: string[];
	description: string;
	links: Link[];
};

export const featuredGames: GameInfo[] = [
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
		links: [{ type: "badge", badge: "poki", url: "https://poki.com/en/g/tens" }],
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
