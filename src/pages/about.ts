import { topLevelPage } from "../shared";

type MemberInfo = {
	name: string;
	portrait: string;
	role: string;
	description: string;
	links: Record<string, string>;
};

const members: MemberInfo[] = [
	{
		name: "Igor",
		portrait: "/img/thumb/tens.svg",
		role: "Programmer",
		description:
			"Made his first tabletop game in 2nd grade. In 5th grade bought a book on JavaScript because he wanted to make J2ME games (iykyk).",
		links: { mastodon: "todo link to mastodon" },
	},
	{
		name: "Veronika",
		portrait: "/img/thumb/tens.svg",
		role: "Artist",
		description:
			"Has a gene that lets her compute perspective 500% more effective than average. Has to put effort into making lines wobbly.",
		links: { artstation: "i thought it was merged with fab" },
	},
	{
		name: "Dr. Banana (PhD)",
		portrait: "/img/thumb/tens.svg",
		role: "Mascot",
		description:
			"Claims he has a degree despite having no fingers. Knows more swear words than polite ones. Never misses deadlines because he just doesn't set them. Doesn't pay rent.",
		links: { scopus: "just kidding" },
	},
];

function member(_ctx: any, memberInfo: MemberInfo) {
	return [
		"div.game",
		["img.game-thumbnail", { src: memberInfo.portrait }],
		[
			"div.game-info",
			["h2", memberInfo.name],
			["p", memberInfo.role],
			["p", memberInfo.description],
			[
				"div.game-links",
				Object.entries(memberInfo.links).map(([key, url]) => [
					"span",
					["a", { href: url }, key],
				]),
			],
		],
	];
}

export function aboutPage(_ctx: any) {
	return [
		topLevelPage,
		"About",
		[
			"p",
			["b", "Dial-Up Dino Games"],
			" is a 2 person game studio. We started participating in game jams in 2019 and still do it twice or trice a year. We also have a couple of small full-fledged games and a dream.",
		],
		["h1", "Meet the team!"],
		["div.game-list", members.map((x) => [member, x])],
	];
}
