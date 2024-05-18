import { fetchForm } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string }}) {
    const id = params.id;
    const form = await fetchForm(id);
    return (
        <div className="mt-5">
            <div className="text-gray-500">{form.id}</div>
            <h2 className="text-2xl font-bold italic">{form.norm}</h2>
        </div>
    );
}