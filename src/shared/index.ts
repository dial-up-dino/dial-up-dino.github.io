export type PartialRecord<TKey extends PropertyKey, TValue> = {
	[key in TKey]?: TValue;
};

export function page(_ctx: any, body: any) {
	return [
		["!DOCTYPE", "html"],
		[
			"html",
			{ lang: "en" },
			[
				"head",
				["meta", { charset: "UTF-8" }],
				[
					"meta",
					{
						name: "viewport",
						content: "width=device-width, initial-scale=1.0",
					},
				],
				["meta", { "http-equiv": "X-UA-Compatible", content: "ie=edge" }],
				["link", { rel: "stylesheet", href: "./reset.css" }],
				["link", { rel: "stylesheet", href: "./style.css" }],
				["link", { rel: "icon", href: "./favicon.png", type: "image/png" }],
				["title", "Dial-Up Dino Games"],
			],
			["body", body],
		],
	];
}
