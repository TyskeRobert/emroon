import { Card } from "@/app/ui/home/cards";
import { fetchCardData } from "@/app/lib/data";

export default async function Page() {
    const {
        totalEntries,
        totalForms
    } = await fetchCardData();

    return (
        <main>
            <h1 className="mb-4 text-xl md:text-2xl">The <b>emroon</b> Archive</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card title="Entries in lexicon" value={totalEntries} type="entries"/>
                <Card title="Forms in lexicon" value={totalForms} type="forms"/>
            </div>
        </main>
    );
}