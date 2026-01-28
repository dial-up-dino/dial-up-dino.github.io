export function page(body: any) {
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
				["link", { rel: "icon", href: "./favicon.ico", type: "image/x-icon" }],
				["title", "Dial-Up Dino Games"],
			],
			["body", body],
		],
	];
}
