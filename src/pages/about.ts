import { topLevelPage } from "../shared";

export function aboutPage(_ctx: any) {
	return [
		topLevelPage,
		"About",
		[
			"p",
			["b", "Dial-Up Dino Games"],
			" is a 2 person game studio. We started participating in game jams in 2019 and still do it twice or trice a year. We also have a couple of small full-fledged games and a dream.",
		],
        ["h1", "Meet the team!"]
	];
}
