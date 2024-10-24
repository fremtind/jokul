import express = require('express');
import { LRUCache } from 'lru-cache/min';
import fetch = require('node-fetch');

const figma: express.Router = express.Router();

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;

const cache = new LRUCache<string, Buffer>({
    max: 50,
    ttl: 1000 * 60 * 60,
});

figma.get('/images', async (req, res) => {
    const figmaUrlParam = req.query['url'];
    if (typeof figmaUrlParam !== 'string') {
        return res.status(400).send();
    }

    const figmaUrl = decodeURIComponent(figmaUrlParam);

    const cached = cache.get(figmaUrl);
    if (cached) {
        return res.status(200).send(cached);
    }

    try {
        const branch = figmaUrl.match(/branch\/(\w+)\//)?.[1];
        const file = branch ? branch : figmaUrl.match(/file\/(\w+)\//)?.[1];
        const node = new URL(figmaUrl).searchParams.get('node-id');

        if (!file || !node) {
            return res.status(400).send();
        }

        const result = await fetch.default(
            `https://api.figma.com/v1/images/${file}?ids=${node}`,
            {
                method: 'GET',
                headers: {
                    'X-Figma-Token': FIGMA_TOKEN || '',
                },
            }
        );

        const data = (await result.json()) as {
            images: Record<string, string>;
        };
        const src = Object.values(data.images)[0];

        const image = await fetch.default(src);
        const buffer = await image.buffer();
        cache.set(figmaUrl, buffer);

        return res
            .header('Content-Type', 'image/png')
            .status(result.status)
            .send(buffer);
    } catch (e) {
        console.log(e);
        return res.status(500).send();
    }
});

export default figma;
