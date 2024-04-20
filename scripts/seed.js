const { db } = require('@vercel/postgres');

async function seedlexicon(client) {
    try {
        const lexicon = require("../data/json/lexicon.json");
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS lexicon (
                id VARCHAR(255) PRIMARY KEY,
                entry VARCHAR(255) NOT NULL
            );
        `;
        console.log(`Created "lexicon" table.`);

        const insertedLemmata = await Promise.all(
            lexicon.map(lemma => {
                client.sql`
                    INSERT INTO lexicon (id, entry)
                    VALUES (${lemma.id}, ${lemma.entry})
                    ON CONFLICT (id) DO NOTHING;
                `;
            })
        );
        console.log(`Seeded ${insertedLemmata.length} lemmata into "lexicon".`);

        return {
            createTable,
            lemmata: insertedLemmata
        };
    } catch (error) {
        console.error('Error seeding lexicon:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await seedlexicon(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});