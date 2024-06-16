import { fetchLemma } from "@/app/lib/data";
import { partsOfSpeech } from "@/app/lib/vocabularies";

import GlossONP from "@/app/ui/lexicon/gloss-onp";
import Paradigm from "@/app/ui/lexicon/paradigm";

export default async function Page({ params }: { params: { id: string }}) {
    const id = params.id;
    const lemma = await fetchLemma(id);
    return (
        <div className="mt-5">
            <div className="text-gray-500">{lemma.id}</div>
            <h2 className="text-2xl font-bold italic">{lemma.entry}</h2>
            <p className="text-xl">{partsOfSpeech.get(lemma.pos)?.full || `Undefined part of speech: ${lemma.pos}`}</p>
            <Paradigm lemma={lemma}/>
            <GlossONP id={lemma.linkONP}/>
        </div>
    )
}