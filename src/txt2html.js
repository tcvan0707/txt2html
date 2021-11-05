import fileSystem from "fs";
import fs from "fs/promises";
import path from "path";
import yargs from "yargs";

import { generateFromText, generateFromMd } from "./generator.js";

const argv = yargs(process.argv.slice(2))
    .usage("Usage: $0 [options]")
    .options({
        version: {
            description: "Show current version",
            alias: "v",
        },
        help: {
            description: "Show help message",
            alias: "h",
        },
        input: {
            description: "Input txt file / directory with txt files",
            alias: "i",
        },
        output: {
            description: "Path to folder with generated files",
            alias: "o",
            default: "dist",
        },
        config: {
            description: "Path to configuration file",
            alias: "c",
        },
        stylesheet: {
            description: "Adds custom CSS to generated html",
            alias: "s",
        },
    }).argv;

async function txt2html(filePath) {
    const fileStat = await fs.stat(filePath);
    let data = argv.config ? fileSystem.readFileSync(argv.config) : null;
    const configData = JSON.parse(data) || null;

    if (fileStat.isFile() && path.extname(filePath) == ".txt") {
        const text = (await fs.readFile(filePath)).toString();
        const fileName = path.basename(filePath, path.extname(filePath));
        const htmlPath = path.join(
            configData ? configData.output : argv.output,
            fileName + ".html"
        );
        const html = generateFromText(
            text,
            fileName,
            configData ? configData.stylesheet : argv.stylesheet
        );
        await fs.writeFile(htmlPath, html);
    } else if (fileStat.isFile() && path.extname(filePath) == ".md") {
        const text = (await fs.readFile(filePath)).toString();
        const fileName = path.basename(filePath, path.extname(filePath));
        const htmlPath = path.join(
            configData ? configData.output : argv.output,
            fileName + ".html"
        );
        const html = generateFromMd(
            text,
            fileName,
            configData ? configData.stylesheet : argv.stylesheet
        );
        await fs.writeFile(htmlPath, html);
    } else {
        throw new Error("Incorrect path");
    }
}

async function main() {
    const config = argv.options.config;
    const distDir = config.output ? config.output : argv.output;
    console.log(distDir);
    try {
        const distStat = await fs.stat(distDir);
        if (distStat.isDirectory()) {
            console.log(`${distDir} already exist, cleaning it`);
            await fs.rm(distDir, { recursive: true, force: true });
        }
    } catch {
        console.log(`${distDir} does not exist, creating it`);
    }
    try {
        await fs.mkdir(distDir);
    } catch (e) {
        throw new Error(`Couldn't create ${distDir}, exiting`);
    }

    const inputPath = config.input ? config.input : argv.input;
    try {
        await txt2html(inputPath);
    } catch {
        const files = await fs.readdir(inputPath);
        for (const file of files) {
            const filePath = path.join(inputPath, file);
            try {
                await txt2html(filePath);
                console.log(`${filePath} converted`);
            } catch {
                console.log(`${filePath} skipped`);
            }
        }
    }
}

main().catch((err) => console.log(err));
