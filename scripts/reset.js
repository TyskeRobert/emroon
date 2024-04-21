const { db } = require('@vercel/postgres');
const lexicon = require("../data/json/lexicon.json");

async function resetLexicon(client) {
    console.log(lexicon[3]);
    try {
        await client.sql`DROP TABLE IF EXISTS lexicon;`;
        await client.sql`DROP TABLE IF EXISTS forms;`;

        const createLexicon = await client.sql`
            CREATE TABLE IF NOT EXISTS lexicon (
                id VARCHAR(10) PRIMARY KEY,
                entry TEXT,
                pos VARCHAR(4),
                linkONP VARCHAR(10)
            );
        `;
        console.log(`Created "lexicon" table.`);

        const createForms = await client.sql`
            CREATE TABLE IF NOT EXISTS forms (
                id VARCHAR(15) PRIMARY KEY,
                formId VARCHAR(5),
                lemmaId VARCHAR(10),
                norm TEXT,
                morph VARCHAR(9)
            );
        `;

        const insertedLemmata = await Promise.all(
            lexicon.map(lemma => {
                client.sql`
                    INSERT INTO lexicon (id, entry, pos, linkONP)
                    VALUES (${lemma.id}, ${lemma.entry}, ${lemma.pos}, ${lemma.linkONP});
                `;
                lemma.forms.map(form => {
                    client.sql`
                        INSERT INTO forms (id, formId, lemmaId, norm, morph)
                        VALUES (${lemma.id + form.id}, ${form.id}, ${lemma.id}, ${form.norm}, ${form.morph});
                    `;
                })
            })
        );
        console.log(`Seeded ${insertedLemmata.length} lemmata into "lexicon".`);

        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        return true;
    } catch (error) {
        console.error('Error seeding lexicon:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await resetLexicon(client);

    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    } catch (error) {
        console.error('Error creating extension.');
    }

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});