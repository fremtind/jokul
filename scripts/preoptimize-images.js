// Dette scriptet sørger for at vi ikke committer gigantiske filer til repoet
// som Gatsby må "knuse" ned til en fornuftig størrelse hver gang det bygges.
// Git skal _IKKE_ være en kilde for ukomprimerte "rå" bilder. Her skal bildene
// kun være store nok til å vises på jokul.fremtind.no.
//
// https://www.gatsbyjs.com/docs/preoptimizing-images/#how-to-pre-optimize-your-images

/* eslint-disable @typescript-eslint/no-var-requires */
const glob = require(`glob`);
const sharp = require(`sharp`);
const fs = require(`fs-extra`);

// Maksbredde for innhold i portalen ligger på 850px, men vi lar folk se bildene i fullskjerm.
// Det største breakpointet vi har i skrivende stund er 1600px. Gi litt og gå på, og sørg for
// en god opplevelse på skjermer med høy pixeltetthet ("Retina").
const MAX_VIEWPORT = 1800;
const MAX_WIDTH = 2 * MAX_VIEWPORT;
const QUALITY = 70;

let files = process.argv.slice(2);
if (files.length === 0) {
    files = glob.sync(`+(packages|portal)/**/*.{png,jpg,jpeg}`);
}

Promise.all([
    files.map(async (match) => {
        const stream = sharp(match);
        const info = await stream.metadata();

        if (info.width < MAX_WIDTH) {
            return;
        }

        const optimizedName = match.replace(
            /(\..+)$/,
            (match, ext) => `-optimized${ext}`,
        );

        await stream
            .resize(MAX_WIDTH)
            .jpeg({ quality: QUALITY })
            .toFile(optimizedName);

        return fs.rename(optimizedName, match);
    }),
]);
