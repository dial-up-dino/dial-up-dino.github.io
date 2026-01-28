import { serialize } from "@thi.ng/hiccup";
import { indexPage } from "./pages";

async function writeFile(path: string, page: any[]) {
	console.log(`Writing ${path}`);
	await Bun.write(path, serialize(page));
}

await writeFile("./docs/index.html", indexPage());
