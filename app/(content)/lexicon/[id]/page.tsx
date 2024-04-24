import { fetchLemma } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string }}) {
    const id = params.id;
    const lemma = await fetchLemma(id);
    return (
        <p>Lemma {id}: {lemma.entry}</p>
    )
}