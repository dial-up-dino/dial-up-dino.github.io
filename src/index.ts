import { cp, mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { serialize } from "@thi.ng/hiccup";
import { indexPage } from "./pages";
import { aboutPage } from "./pages/about";

const STATIC_DIR = "./static";
const DEST_DIR = "./docs";

async function writeFile(path: string, page: any) {
	console.log(`Writing ${path}`);
	await Bun.write(path, serialize(page));
}

async function main() {
	const entries = await readdir(DEST_DIR);
	await Promise.all(
		entries.map((entry) => rm(path.join(DEST_DIR, entry), { recursive: true })),
	);

	await cp(STATIC_DIR, DEST_DIR, { recursive: true, preserveTimestamps: true });

	await writeFile("./docs/index.html", [indexPage]);
	await mkdir("./docs/about");
	await writeFile("./docs/about/index.html", [aboutPage]);
}

await main();
